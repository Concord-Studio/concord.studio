---
title: "List"
description: "Data structure that allows for fast removal at the cost of order."
slug: api/list
sidebar:
  order: 7
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
List = require('concord.list')
```

## List

Iterate in order with `ipairs(list)` over indices `1`..`list.size`.
`List()` is equivalent to `List.new()`.

#### Fields

| Name | Type | Description |
| --- | --- | --- |
| `size` | integer | Number of items in the List |

## Methods

| Method | Description |
| --- | --- |
| [List.new](/api/list/new) | Creates a new List. |
| [List:add](/api/list/add) | Adds an object to the List. |
| [List:remove](/api/list/remove) | Removes an object from the List. |
| [List:clear](/api/list/clear) | Clears the List completely. |
| [List:has](/api/list/has) | Returns true if the List has the object. |
| [List:get](/api/list/get) | Returns the object at an index. |
| [List:indexOf](/api/list/index-of) | Returns the index of an object in the List. |
| [List:sort](/api/list/sort) | Sorts the List in place, using the order function. |
| [List:onAdded](/api/list/on-added) | Callback for when an item is added to the List. |
| [List:onRemoved](/api/list/on-removed) | Callback for when an item is removed from the List. |
