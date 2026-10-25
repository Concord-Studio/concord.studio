---
title: "Filter:clear"
description: "Clears the Pool associated to this Filter."
slug: api/filter/clear
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Filter](/api/filter)

Clears the Pool associated to this Filter.

Arguments are forwarded to the Pool's clear method.

```lua
filter = filter:clear( ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `...` | any | Forwarded to pool:clear |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `filter` | [Filter](/api/filter#filter) |  |
