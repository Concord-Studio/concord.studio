---
title: "World:beforeEmit"
description: "Callback before World:emit forwards an event to Systems."
slug: api/world/before-emit
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← World](/api/world)

Callback before World:emit forwards an event to Systems.

Returning a truthy value skips System listeners and afterEmit for this emit.
Nested emits are forbidden inside this callback

```lua
skip = world:beforeEmit( systemName, functionName, listeners, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `systemName` | string | System name when emit used `"SystemName.event"`, otherwise nil |
| `functionName` | string | Name of the event being emitted |
| `listeners` | table | Listeners registered for this event, or nil |
| `...` | any | Parameters passed to World:emit |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `skip` | boolean? | Truthy to skip listeners |
