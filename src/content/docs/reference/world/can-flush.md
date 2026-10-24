---
title: "World:canFlush"
description: "Returns whether a Flush can currently be performed."
slug: api/world/can-flush
sidebar:
  hidden: true
---

[← World](/api/world)

Returns whether a Flush can currently be performed.

Flushing is forbidden while a Flush is already in progress
(for example from World:onEntityAdded / Pool:onAdded).

```lua
boolean = world:canFlush()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | boolean |  |
