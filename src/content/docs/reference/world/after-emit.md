---
title: "World:afterEmit"
description: "Callback after World:emit has forwarded an event to Systems."
slug: api/world/after-emit
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← World](/api/world)

Callback after World:emit has forwarded an event to Systems.

Not called when beforeEmit skips the emit
Nested emits are forbidden inside this callback

```lua
world:afterEmit( systemName, functionName, listeners, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `systemName` | string | System name when emit used `"SystemName.event"`, otherwise nil |
| `functionName` | string | Name of the event being emitted |
| `listeners` | table | Listeners registered for this event, or nil |
| `...` | any | Parameters passed to World:emit |
