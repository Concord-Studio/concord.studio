---
title: "World:beforeSystemCallback"
description: "Callback before World:emit forwards an event to a System."
slug: api/world/before-system-callback
sidebar:
  hidden: true
---

[← World](/api/world)

Callback before World:emit forwards an event to a System.

Returning a truthy value skips the System listener and afterSystemCallback for this event.
Nested emits are forbidden inside this callback

```lua
boolean = world:beforeSystemCallback( system, eventName, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `system` | [System](/api/system#system) | System that is being called |
| `eventName` | string | Name of the event being emitted |
| `...` | any | Parameters passed to World:emit |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | boolean? | Truthy to skip the System listener and afterSystemCallback |
