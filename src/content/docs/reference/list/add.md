---
title: "List:add"
description: "Adds an object to the List."
slug: api/list/add
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← List](/api/list)

Adds an object to the List.

Object must be of reference type
Object may not be the string 'size', 'onAdded' or 'onRemoved'

```lua
list = list:add( obj )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `obj` | any | Object to add |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `list` | [List](/api/list#list) |  |
