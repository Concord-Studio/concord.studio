---
title: "List:sort"
description: "Sorts the List in place, using the order function."
slug: api/list/sort
sidebar:
  hidden: true
---

[← List](/api/list)

Sorts the List in place, using the order function.

The order function is passed to table.sort internally so documentation on table.sort can be used as reference.

```lua
list = list:sort( order )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `order` | fun(a: any,  b: any): boolean | Function that takes two items (a and b) and returns true if a should go before b. |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `list` | [List](/api/list#list) |  |
