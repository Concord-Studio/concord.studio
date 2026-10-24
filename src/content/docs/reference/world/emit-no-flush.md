---
title: "World:emitNoFlush"
description: "Emits a callback in the World without flushing."
slug: api/world/emit-no-flush
sidebar:
  hidden: true
---

[← World](/api/world)

Emits a callback in the World without flushing.

```lua
world = world:emitNoFlush( functionName, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `functionName` | string | Name of functions to call. |
| `...` | any | Parameters passed to System's functions |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | [World](/api/world#world) |  |

### See also

- [World:emit](/api/world/emit)
