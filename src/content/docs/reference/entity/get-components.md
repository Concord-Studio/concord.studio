---
title: "Entity:getComponents"
description: "Returns a shallow copy of the Entity's fields, excluding __world and __isEntity."
slug: api/entity/get-components
sidebar:
  hidden: true
---

[← Entity](/api/entity)

Returns a shallow copy of the Entity's fields, excluding __world and __isEntity.

This is primarily the Entity's Components. Extra non-component fields are also copied.
Mutating a copied Component still mutates the Entity's Component.

```lua
matches = entity:getComponents( output )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `output` | table | Table to copy into. A new table is created if omitted. |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `matches` | table |  |
