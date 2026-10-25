---
title: "Serialization"
---

Concord can snapshot Entities and Worlds and build them again. Use it for save games, round-tripping a level editor, or any time you need the same data back later.

## Who gets saved

New Entities receive a `serializable` flag by default (`Entity.SERIALIZE_BY_DEFAULT`). `World:serialize` writes Entities that still have that flag. Remove it (or never give it) for debug markers, purely visual FX, or anything that should not come back from a save.

`serializable` itself is omitted from the output. It is a marker, not a field.

## Entities and Worlds

```lua
local snapshot = world:serialize()
-- write snapshot with bitser, json, love.filesystem, ...

world:deserialize(snapshot, true) -- startClean: replace what is here
```

`Entity:serialize` / `Entity:deserialize` do one Entity. `World:serialize` walks serializable Entities. `World:deserialize` can `startClean`, and can ignore the saved key-generator state if you are merging into a World that already has keys.

Pass `ignoreKeys` when the snapshot should not carry identity. Keep keys when the snapshot *is* the save. See [Entity Keys and Resources](/guides/entity-keys-and-resources).

Component classes must already be registered before deserialize. Load your `components/` folder at startup ([Loading Namespaces](/guides/loading-namespaces)); a missing name is an error, not a skip.

## Custom serialize / deserialize

The defaults shallow-copy the Component's fields and strip Concord internals. Override them when you need to omit a field, reshape, or revive a LÖVE object:

```lua
function Sprite:serialize ()
  return { path = self.path } -- not the Image
end

function Sprite:deserialize (data)
  self.path = data.path
  self.image = love.graphics.newImage(data.path)
end
```

Return `nil` from `serialize` to omit the Component entirely (how `serializable` works). A Component that cannot be copied with [Cloning a Component](/guides/cloning-a-component) is usually one that returns `nil`.

If the Component owns a Body or a Canvas, tear it down in `removed` so a replace-during-deserialize does not leak. See [Component:removed Guide](/guides/component-removed).

## See also

- [serializable](/api/builtins/serializable)
- [Cloning a Component](/guides/cloning-a-component)
- [Entity Keys and Resources](/guides/entity-keys-and-resources)
