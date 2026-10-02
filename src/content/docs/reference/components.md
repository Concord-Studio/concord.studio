---
title: "Components"
description: "Container for registered ComponentClasses"
slug: api/components
sidebar:
  order: 4
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
concord.component = require('concord.components')
```

## has

Returns true if the container has the ComponentClass with the specified name

```lua
boolean = Components.has( name )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the ComponentClass to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## reject

Prefix a component's name with the currently set Reject Prefix

```lua
string = Components.reject( name )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the ComponentClass to reject |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `string` | `string` |  |

## try

Returns true and the ComponentClass if one was registered with the specified name

or false and an error otherwise

```lua
boolean = Components.try( name, acceptRejected )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the ComponentClass to check |
| `acceptRejected` | `boolean` | Whether to accept names prefixed with the Reject Prefix. |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` | ok |
|  | `ComponentClass\|string` | componentClass ComponentClass on success, or an error string on failure |
|  | `string\|boolean` | rejected On success: the stripped Component name if the name had the Reject Prefix, otherwise false |

## get

Returns the ComponentClass with the specified name

```lua
component = Components.get( name )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the ComponentClass to get |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `component` | `ComponentClass` |  |
