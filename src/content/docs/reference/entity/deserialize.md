---
title: "Entity:deserialize"
description: "Deserializes Components onto the Entity from the array portion of serialized data."
slug: api/entity/deserialize
sidebar:
  hidden: true
---

[← Entity](/api/entity)

Deserializes Components onto the Entity from the array portion of serialized data.

Component classes must already be registered. Does not restore `key`; `World:deserialize` handles keys separately.

```lua
entity:deserialize( data )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `data` | table | Serialized Entity data (array of component blobs; may include `.key` when loading outside World) |

### See also

- [World:deserialize](/api/world/deserialize)
