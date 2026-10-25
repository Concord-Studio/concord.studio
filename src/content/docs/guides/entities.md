---
title: "Entities"
---

An Entity is a bundle of Components. On its own it is empty — a Component is a named piece of data, and those pieces are what make one Entity a Cat and another a Bullet. The [Components Guide](/guides/components) is where those shapes are defined.

We will keep using the Cat from Getting Started:

```lua
local Cat = world:newEntity()

Cat:give("position", 50, 50)
Cat:give("terrestrial")
```

## Give vs Ensure

Later in the game, the Cat gets teleported:

```lua
Cat:give("position", 0, 0)
```

`give` always writes the Component, no questions asked. If the Cat already had a `position`, the old one is gone — overwritten with the new x, y. That is exactly what you want here: teleporting *means* replacing the old position, not merging with it.

But now imagine a different situation. You are writing a `withHealth` helper that a bunch of different assemblages can call, to make sure whatever they are building can take damage:

```lua
local function withHealth (entity, hp)
  entity:give("health", hp or 10)
end
```

If two assemblages both call `withHealth`, or someone calls it twice by accident, the second call wipes out whatever health the first one set — even if the Entity already took damage in between. That is not a reset anymore, it is data loss.

This is what `ensure` is for. It only creates the Component if the Entity does not already have one; if it is there, `ensure` does nothing and leaves the existing values alone:

```lua
local function withHealth (entity, hp)
  entity:ensure("health", hp or 10)
end

Cat:give("health", 3)
Cat:assemble(withHealth, 10) -- still 3, ensure refused to overwrite
```

The rule of thumb: if you are *setting* the data (spawning, teleporting, resetting a value to a known state), use `give`. If you are *guaranteeing* the data exists without clobbering what might already be there (a shared helper, a "make sure this thing can be drawn" step), use `ensure`.

## Removing Components

Presence is data, too. Take `terrestrial` off the Cat, and it is no longer terrestrial:

```lua
Cat:remove("terrestrial")
```

You might be tempted to just set `Cat.terrestrial = nil` by hand — don't. `remove` is what tells Concord the Entity changed. A hand-set `nil` is invisible to that bookkeeping.

It is safe to call `remove` while you are iterating a list of Entities. Concord does not reshuffle that list under you mid-loop. Membership in those lists catches up a moment later; [Pool Flushing and Timing](/guides/pool-flushing-and-timing) is the full story if you need it.

## Assemblages

Once you are spawning more than a couple of Cats, repeating the same `give` calls everywhere is both tedious and a maintenance trap — add a Component to "what a Cat is" later, and you have to hunt down every spawn site.

An assemblage is just a plain function that takes an Entity and sets it up:

```lua
local function asCat (entity, x, y)
  entity
    :give("position", x, y)
    :give("terrestrial")
end
```

`Entity:assemble` calls that function for you, passing the Entity along with whatever extra arguments you give it, and returns the Entity so you can keep chaining:

```lua
local Cat = world:newEntity():assemble(asCat, 50, 50)
```

There is nothing magic in `assemble` — it is `fn(entity, ...)`. That is the whole feature. The value is in how you *use* it: write small, single-purpose assemblages (`withPosition`, `withHealth`) and compose them into bigger ones (`asCat`), rather than one giant `spawnEverything(entity, kind, ...)` function that branches on a string.

## Removing Entities

When the Cat should leave the World entirely:

```lua
Cat:destroy()
```

Like `remove`, `destroy` is safe to call while you are iterating. You can walk a list, destroy the ones that are done, and finish the loop without the list shifting under you:

```lua
for _, entity in ipairs(cats) do
  if entity.health.hp <= 0 then
    entity:destroy()
  end
end
```

:::warning
Do not reach for `World:clear()` to kill one Entity. `clear` tears down the entire World. It is what you call when a level ends, not when one enemy dies.
:::

## The Entity's World

An Entity belongs to at most one World. `Entity:getWorld()` is how you get back to it.

Usually you do not need to think about this, because `world:newEntity()` already queues the Entity into that World the moment you create it. You can also build an Entity with no World yet, and add it later — useful if you want to fully assemble something before it is live:

```lua
local Cat = Concord.Entity()
Cat:assemble(asCat, 50, 50)
world:addEntity(Cat)
```

`Entity:inWorld()` tells you whether an Entity has been queued into a World — true as soon as you call `addEntity` (or use `newEntity`).

## See also

- [Components Guide](/guides/components) — the data you are giving and removing
- [Systems Guide](/guides/systems) — behavior over groups of Entities
- [Entity](/api/entity) — API
