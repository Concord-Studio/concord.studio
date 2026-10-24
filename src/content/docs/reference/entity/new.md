---
title: "Entity.new"
description: "Creates a new Entity. Optionally queues it to be added to a World."
slug: api/entity/new
sidebar:
  hidden: true
---

[← Entity](/api/entity)

Creates a new Entity. Optionally queues it to be added to a World.

If Entity.SERIALIZE_BY_DEFAULT is true, the Entity is given a "serializable" Component.

```lua
entity = Entity.new( world )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `world` | [World](/api/world#world) | World to add the entity to |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `entity` | [Entity](/api/entity#entity) |  |
