---
title: "World:addSystems"
description: "Adds multiple Systems to the World."
slug: api/world/add-systems
sidebar:
  hidden: true
---

[← World](/api/world)

Adds multiple Systems to the World.

Functions on each SystemClass are registered as event listeners.

```lua
world = world:addSystems( ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `...` | [SystemClass](/api/system/system-class) | SystemClasses of Systems to add |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | [World](/api/world#world) |  |

### See also

- [World:addSystem](/api/world/add-system)
- [World:emit](/api/world/emit)
