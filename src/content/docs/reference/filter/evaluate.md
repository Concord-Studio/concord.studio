---
title: "Filter:evaluate"
description: "Evaluates an Entity against this Filter and updates the Pool."
slug: api/filter/evaluate
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Filter](/api/filter)

Evaluates an Entity against this Filter and updates the Pool.

Adds the Entity if it became eligible, removes it if it no longer is.

```lua
filter = filter:evaluate( e )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | [Entity](/api/entity#entity) | Entity to evaluate |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `filter` | [Filter](/api/filter#filter) |  |
