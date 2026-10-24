---
title: "World:deserialize"
description: "Deserializes Entities into the World."
slug: api/world/deserialize
sidebar:
  hidden: true
---

[← World](/api/world)

Deserializes Entities into the World.

Restores each entity's `key` first when present in saved data, then deserializes component array entries.

```lua
world = world:deserialize( data, startClean, ignoreGenerator )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `data` | [SerializedWorld](/api/world/serialized-world) | Serialized world data |
| `startClean` | boolean | If true, existing Entities are cleared first |
| `ignoreGenerator` | boolean | If true, the World's key generator state is left unchanged |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | [World](/api/world#world) |  |

### See also

- [Entity:deserialize](/api/entity/deserialize)
