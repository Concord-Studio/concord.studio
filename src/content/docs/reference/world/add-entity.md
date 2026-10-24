---
title: "World:addEntity"
description: "Queues an Entity to be added to the World."
slug: api/world/add-entity
sidebar:
  hidden: true
---

[← World](/api/world)

Queues an Entity to be added to the World.

The Entity's world is set immediately. The Entity is not in getEntities()
and is not evaluated by Systems until the next flush.

```lua
world = world:addEntity( e )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | [Entity](/api/entity#entity) | Entity to add |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | [World](/api/world#world) |  |
