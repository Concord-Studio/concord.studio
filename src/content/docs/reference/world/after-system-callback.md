---
title: "World:afterSystemCallback"
description: "Callback after World:emit has forwarded an event to a System."
slug: api/world/after-system-callback
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← World](/api/world)

Callback after World:emit has forwarded an event to a System.

Not called when beforeSystemCallback skips the emit
Nested emits are forbidden inside this callback

```lua
world:afterSystemCallback( system, eventName, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `system` | [System](/api/system#system) | System that is being called |
| `eventName` | string | Name of the event being emitted |
| `...` | any | Parameters passed to World:emit |
