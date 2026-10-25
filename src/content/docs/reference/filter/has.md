---
title: "Filter:has"
description: "Checks if the Pool associated to this Filter contains the passed Entity."
slug: api/filter/has
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Filter](/api/filter)

Checks if the Pool associated to this Filter contains the passed Entity.

```lua
exists = filter:has( e )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | [Entity](/api/entity#entity) | Entity to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `exists` | boolean | Whether the Entity exists. |
