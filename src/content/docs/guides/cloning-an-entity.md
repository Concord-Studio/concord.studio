---
title: "Cloning an Entity"
---

Duplicating a whole Entity — a prototype crate, a prefab from a level editor, a corpse that should look like the living one — is serialize then deserialize onto a new Entity.

## The recipe

```lua
local function cloneEntity (world, original)
  local copy = world:newEntity()
  copy:deserialize(original:serialize(true)) -- ignore key
  return copy
end

local crate2 = cloneEntity(world, crate)
```

`Entity:serialize(true)` omits `key` so the copy does not steal the original's identity. If you *want* a new key, `give("key")` after. If you are writing a save, keep keys — that is [Serialization](/guides/serialization), not cloning.

## What is not a clone

`Entity:getComponents` is a shallow copy of fields. The Component tables are the *same* objects. Mutating `copy.position` would mutate `original.position`. Do not use it to clone.

[Cloning a Component](/guides/cloning-a-component) copies one instance onto an Entity that already exists. Use that when you only want `health` or `sprite`, not the whole bundle.

An [assemblage](/guides/entities) plus a few `give`s is better when serialize is too coarse — when you want a new cat at a new position, not a photocopy including `dead`.

## After the copy

The copy is a new Entity in the World. Components whose `serialize` returned `nil` are missing; give those again if the clone should have them (`serializable` is re-added by default on `newEntity`).

## See also

- [Cloning a Component](/guides/cloning-a-component)
- [Serialization](/guides/serialization)
