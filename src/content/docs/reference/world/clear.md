---
title: "World:clear"
description: "Removes all Entities from the World and flushes."
slug: api/world/clear
sidebar:
  hidden: true
---

[← World](/api/world)

Removes all Entities from the World and flushes.

Entities that were queued to be added are detached immediately without
onEntityRemoved. Already flushed Entities are removed through the normal flush.

```lua
world = world:clear()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | [World](/api/world#world) |  |
