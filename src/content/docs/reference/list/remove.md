---
title: "List:remove"
description: "Removes an object from the List."
slug: api/list/remove
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← List](/api/list)

Removes an object from the List.

```lua
list = list:remove( obj )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `obj` | any | Object to remove |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `list` | [List](/api/list#list)\|nil | Returns self if removed; nil if the object was not in the List |
