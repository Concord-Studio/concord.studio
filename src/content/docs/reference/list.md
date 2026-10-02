---
title: "List"
description: "Data structure that allows for fast removal at the cost of order."
slug: api/list
sidebar:
  order: 6
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
List = require('concord.list')
```

## new

Creates a new List.

```lua
list = List.new()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `list` | `List` |  |

## add

Adds an object to the List.

Object must be of reference type
Object may not be the string 'size', 'onAdded' or 'onRemoved'

```lua
list = list:add( obj )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `obj` | `any` | Object to add |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `list` | `List` |  |

## remove

Removes an object from the List.

```lua
list:remove( obj )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `obj` | `any` | Object to remove |

### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | `List\|nil` | Returns self if removed; nil if the object was not in the List |

## clear

Clears the List completely.

Does not call onRemoved.

```lua
list = list:clear()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `list` | `List` |  |

## has

Returns true if the List has the object.

```lua
boolean = list:has( obj )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `obj` | `any` | Object to check for |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## get

Returns the object at an index.

```lua
any = list:get( i )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `i` | `integer` | Index to get from |

## indexOf

Returns the index of an object in the List.

Errors if the object is not in the List.

```lua
integer = list:indexOf( obj )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `obj` | `any` | Object to get index of |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `integer` | `integer` | index of object in the List. |

## sort

Sorts the List in place, using the order function.

The order function is passed to table.sort internally so documentation on table.sort can be used as reference.

```lua
list = list:sort( order )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `order` | `fun(a: any, b: any)` | : boolean Function that takes two items (a and b) and returns true if a should go before b. |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `list` | `List` |  |

## onAdded

Callback for when an item is added to the List.

```lua
list:onAdded( obj )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `obj` | `any` | Object that was added |

## onRemoved

Callback for when an item is removed from the List.

Not called by List:clear.

```lua
list:onRemoved( obj )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `obj` | `any` | Object that was removed |
