---
title: "World:serialize"
description: "Serializes serializable Entities in the World."
slug: api/world/serialize
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← World](/api/world)

Serializes serializable Entities in the World.

Flushes first. Only Entities with a serializable Component are included.

```lua
data = world:serialize( ignoreKeys )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `ignoreKeys` | boolean | If true, omits keys when calling `Entity:serialize` (Entity parameter name: `ignoreKey`) |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `data` | [SerializedWorld](/api/world/serialized-world) | Serialized world data |

### See also

- [Entity:serialize](/api/entity/serialize)
