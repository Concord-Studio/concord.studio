---
title: "Entity:serialize"
description: "Serializes the Entity's Components."
slug: api/entity/serialize
sidebar:
  hidden: true
---

[← Entity](/api/entity)

Serializes the Entity's Components.

Output shape: optional `key` field (key value) unless `ignoreKey`; other components as array entries
each with `__name` plus fields from `Component:serialize`. Components that return nil from serialize are omitted.

```lua
matches = entity:serialize( ignoreKey )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `ignoreKey` | boolean | If true, the key Component is omitted (World:serialize uses the related flag `ignoreKeys`) |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `matches` | table | Serialized Entity data |

### See also

- [SerializedWorld](/api/world/serialized-world)
