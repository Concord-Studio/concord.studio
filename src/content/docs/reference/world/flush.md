---
title: "World:flush"
description: "Applies queued Entity additions, removals, and dirty reevaluations."
slug: api/world/flush
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← World](/api/world)

Applies queued Entity additions, removals, and dirty reevaluations.

Only the queued buffers are processed, not every Entity in the World.

```lua
world = world:flush()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | [World](/api/world#world) |  |
