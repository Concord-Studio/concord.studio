---
title: "Filter:add"
description: "Adds an Entity to the Pool, if it passes the Filter."
slug: api/filter/add
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Filter](/api/filter)

Adds an Entity to the Pool, if it passes the Filter.

```lua
filter = filter:add( e, bypass )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | [Entity](/api/entity#entity) | Entity to add |
| `bypass` | boolean | Whether to bypass the Filter or not. |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `filter` | [Filter](/api/filter#filter) |  |
| `added` | boolean | Whether the entity was added or not. |
