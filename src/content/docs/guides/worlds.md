---
title: "Worlds"
---

The World is the single place your game sits. Entities and Systems are added to it; events are emitted at it. Getting Started created a World, added Movement, and called `emit("move")`. This is that loop as you would write it in a game.

## Why a World

One World owns a set of Entities, a set of Systems, and the event bus that ties them together. You almost always want one simulation World.

Two Worlds are two isolated games. They do not share Entities or System instances. That isolation is the point: you can pause one World without touching the other. It is a mistake when you meant "the HUD should see the player" — those belong in the same World.

## Filling it

Spawn with `world:newEntity()` (already queued into this World) or build an Entity and `world:addEntity` it. Add behavior with `world:addSystem` or `world:addSystems`:

```lua
local world = Concord.World()

world:addSystems(Movement, Render)

local Cat = world:newEntity()
Cat:give("position", 50, 50)
Cat:give("terrestrial")
```

The same System class in two Worlds becomes two instances. Adding the same class twice to one World is an error. Order matters: Systems handle each event in the order they were added, so put movement before rendering.

Look up another System with `world:getSystem` when you need to enable it, disable it, or read state you stored on `self`.

:::warning
`World:clear()` tears down the entire World: every Entity, including ones still queued to be added. Call it when a level ends, not when one enemy dies.
:::

## Events

LÖVE (or your own loop) talks to Concord by emitting:

```lua
function love.update (dt)
  world:emit("update", dt)
end

function love.draw ()
  world:emit("draw")
end
```

`World:emit` calls every enabled System that defined that function, in add-order, with the extra arguments you passed. `dt` lands on `System:update(dt)` because you passed it here.

That is the whole bridge. Systems do not subscribe themselves to LÖVE; they subscribe to the World, and you forward what you care about.

[Making a game with Concord and LÖVE](/guides/making-a-game) is this loop as a vertical slice.

## See also

- [World](/api/world) — API
- [Systems Guide](/guides/systems) — who listens
- [Making a game with Concord and LÖVE](/guides/making-a-game)
