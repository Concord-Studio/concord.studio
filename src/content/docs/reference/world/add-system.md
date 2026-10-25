---
title: "World:addSystem"
description: "Adds a System to the World."
slug: api/world/add-system
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← World](/api/world)

Adds a System to the World.

Functions on the SystemClass are registered as event listeners.
Entities already in the World are evaluated against the System's Filters.

```lua
world = world:addSystem( systemClass )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `systemClass` | [SystemClass](/api/system/system-class) | SystemClass of System to add |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | [World](/api/world#world) |  |

### See also

- [World:emit](/api/world/emit)
