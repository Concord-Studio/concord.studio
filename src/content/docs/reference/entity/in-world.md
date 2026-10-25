---
title: "Entity:inWorld"
description: "Returns true if the Entity has been assigned a World."
slug: api/entity/in-world
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Entity](/api/entity)

Returns true if the Entity has been assigned a World.

True as soon as addition is queued, and remains true until removal is flushed.

```lua
inWorld = entity:inWorld()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `inWorld` | boolean |  |
