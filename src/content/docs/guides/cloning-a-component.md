---
title: "Cloning a Component"
---

Sometimes the data you want is already sitting on another Entity: a prototype crate, a buff the player just picked up, a `position` you want to stamp onto a bullet. Concord lets you pass that instance to `give` (or `ensure`) instead of repeating the populate arguments.

## A template

```lua
local Prototype = world:newEntity()
  :give("position", 10, 20)
  :give("health", 5)

local Drop = world:newEntity()
Drop:give(Prototype.health)   -- copies { hp = 5 }, not a shared table
Drop:give("position", 100, 80)
```

`give(Prototype.health)` copies through `serialize` and `deserialize`. Populate arguments are ignored: the instance *is* the source.

Use this when the interesting values already exist. Use an [assemblage](entities.md) when you are describing a *kind* of Entity from arguments (`asCat(x, y)`).

`ensure` with an instance is "copy this unless they already have one":

```lua
crate:ensure(Prototype.health)
```

## What will not copy

If `serialize` returns `nil`, there is nothing to copy. The builtin `serializable` flag does that on purpose — it is a marker, not data. A Component that holds a LÖVE Body and returns `nil` from `serialize` cannot be cloned this way until you teach it to round-trip. [Serialization](serialization.md) is that article.

The default serialize is a shallow copy. Nested tables are shared between the original and the clone. If `inventory.slots` is a table, both Entities will see the same slots until you write a deeper `serialize`.

Replacing an existing Component still runs `removed` with `replaced == true` on the old instance. Cleanup on the source Entity is not your problem; cleanup on the *target* is, if it already had that name.

## See also

- @{Entity:give}
- [Serialization](serialization.md)
- [Entities](entities.md)
