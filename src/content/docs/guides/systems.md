---
title: "Systems"
---

In ECS, data and behavior live apart. Components hold the data; Systems define how a group of Entities should behave when something happens.

Getting Started built a `Movement` System with one Pool of animals. We will keep that Cat, and grow the System into something you would actually ship: several Pools, a way to pause, and a little per-World state.

## Filters

A Filter is a question: "who is a terrestrial animal, and not a machine?"

```lua
local Movement = Concord.System("Movement", {
  animals = { "terrestrial", "position", "!machine" }
})
```

Every name without a prefix is required. A name with `!` is rejected. The Entity must have *all* of the required Components and *none* of the rejected ones.

That is why flag Components are so useful. `terrestrial` and `machine` are answers you can ask in a Filter instead of `if entity.kind ~= "robot"` inside the loop.

When the question is one-off — "which Entities are under the cursor, right now?" — `World:query` is enough. When you will ask the same question every `update`, a Pool on a System is cheaper: the World keeps it in sync as Entities change.

## Pools

Each entry in the definition becomes a Pool on the instance. One System may hold as many as you need:

```lua
local Body = Concord.System("Body", {
  animals   = { "terrestrial", "position" },
  drawables = { "position", "drawable" },
})

function Body:update (dt)
  for _, entity in ipairs(self.animals) do
    entity.position.x = entity.position.x + 40 * dt
  end
end

function Body:draw ()
  for _, entity in ipairs(self.drawables) do
    love.graphics.circle("fill", entity.position.x, entity.position.y, 8)
  end
end
```

`animals` and `drawables` overlap (the Cat is in both). That is the point: draw does not care about walking, and movement does not care about sprites.

A System with no Pools is valid. Use that for managers that only listen to events: a scorekeeper, an audio router.

## Enable / Disable

You often want to pause simulation and keep drawing, or to turn a debug overlay off without tearing it down.

```lua
world:getSystem(Body):setEnabled(false) -- no more Body:update or Body:draw
```

`System:setEnabled` skips this System's event listeners. Pools still update, so when you enable it again the lists are already right. `onEnabled` and `onDisabled` run on the transition if you need to mute audio or hide a canvas.

`init`, `onEnabled`, and `onDisabled` are not World events. You cannot `emit("init")` and hit them.

## Callbacks

Any other function you put on the class becomes a listener. The World calls it when you `emit` that name:

```lua
function Movement:move ()
  for _, entity in ipairs(self.animals) do
    entity.position.x = entity.position.x + 5
  end
end
```

Listeners run in the order the Systems were added. Add draw after movement so a position written this tick is the one you render. Extra arguments to `emit` become extra arguments to the method (`update` gets `dt` because `love.update` passed it).

## Initializing

`init` runs when the System is added to a World, with that World as the argument. Pools already exist.

```lua
function Body:init (world)
  self.gravity = 900
end
```

This is the place to set defaults, cache a value you will use every tick, or otherwise get the System ready. It is not an event: the World calls it once, when the System joins.

## Storing data

State on `self` is per World: two Worlds with the same System class get two instances. State you put on the *class* is shared across those instances.

Keep that state small and about this System — gravity, a paused flag, a count. If several Systems need the same object (a camera, an atlas), that object belongs on the World, not stuffed into one System and fished out of another. [Entity Keys and Resources](entity-keys-and-resources.md) covers that pattern.

## System's World

`System:getWorld` is how a System talks to everyone else:

```lua
function Movement:move ()
  -- ...
  self:getWorld():emit("playSound", "meow")
end
```

A System can emit from inside a callback. That nested event runs immediately; you do not call the other System yourself.

## See also

- @{System} — API
- [Worlds](worlds.md) — adding Systems and emitting events
- [Entities](entities.md) — the bundles these Pools hold
