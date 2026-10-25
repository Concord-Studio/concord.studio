---
title: "Filter.match"
description: "Returns true if the Entity matches a parsed Filter."
slug: api/filter/match
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Filter](/api/filter)

Returns true if the Entity matches a parsed Filter.

```lua
matches = Filter.match( e, filter )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | [Entity](/api/entity#entity) | Entity to check |
| `filter` | [ParsedFilter](/api/filter/parsed-filter) | Parsed filter from Filter.parse |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `matches` | boolean |  |
