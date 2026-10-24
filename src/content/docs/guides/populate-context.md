---
title: "Finding the Entity and World in populate"
---

The populate function looks like a constructor. It is not quite. Library authors need what is already wired when it runs; game code usually does not.

## What is already there

Concord sets `self.__entity` before populate runs. If that Entity was queued into a World, `Entity:getWorld` works:

```lua
Concord.Component("inRoom", function (c, roomId)
  local entity = c.__entity
  local world = entity:getWorld()
  -- world may be nil if the Entity was constructed with no World
end)
```

The builtin `key` is the canonical example: it refuses to populate unless `entity:inWorld()`, then asks the World to assign a key. Read [`concord/builtins/key.lua`](../concord/builtins/key.lua) alongside this page.

## What is not there yet

The new Component is **not** on the Entity until populate returns. During a replacing `give`, `entity.position` is still the *old* instance. Do not `entity:give("position", ...)` from inside `position`'s populate.

Do not spawn Entities, do not `flush`, and do not assume Pools already contain you.

## When to use this

Game code should prefer assemblages and Systems. Reach for `__entity` when a Component must register itself with something the World owns: the key hash, a physics world stored as a [resource](entity-keys-and-resources.md), a spatial index you do not want a System to have to notice.

Tear that registration down in `removed`. `key` does this; your Component should too.

## See also

- @{key}
- [Component:removed](component-removed.md)
- [Components](components.md)
