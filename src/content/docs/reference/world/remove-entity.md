---
title: "World:removeEntity"
description: "Queues an Entity to be removed from the World."
slug: api/world/remove-entity
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← World](/api/world)

Queues an Entity to be removed from the World.

If the Entity has a key Component, it is removed first.
The Entity remains in the World until the next flush.

```lua
world = world:removeEntity( e )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | [Entity](/api/entity#entity) | Entity to remove |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | [World](/api/world#world) |  |
