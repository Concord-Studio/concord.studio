---
title: "World:emit"
description: "Emits a callback in the World."
slug: api/world/emit
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← World](/api/world)

Emits a callback in the World.

Calls all functions with the functionName of added Systems (see System class for listener registration).
Prefix the name with a System's name to target one System: `"SystemName.event"`.
Automatically flushes before forwarding the event, unless this emit is nested
or a flush is already in progress.
If beforeEmit exists and returns a truthy value, listeners are skipped.
afterEmit is called after listeners when present.

```lua
world = world:emit( functionName, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `functionName` | string | Event name, or `"SystemName.event"` to call only that System |
| `...` | any | Parameters passed to System's functions |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | [World](/api/world#world) |  |

### See also

- [System](/api/system#system)
