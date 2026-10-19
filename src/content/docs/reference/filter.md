---
title: "Filter"
description: "List of component names for one filter (`!name` to reject)."
slug: api/filter
sidebar:
  order: 6
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
Filter = require('concord.filter')
```

## Filter

Used to filter Entities with specific Components

A Filter has an associated Pool that can contain any amount of Entities.
## validate

Validates a Filter Definition to make sure every component is valid.

Also checks that def.constructor is callable when present, unless onComponent is provided.

```lua
Filter.validate( errorLevel, name, def, onComponent )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `errorLevel` | integer | Extra stack level added to error reports |
| `name` | string | Name for the Filter. If omitted, errors refer to a World:query filter. |
| `def` | [FilterDefinition](/api/filter#filterdefinition) | Table containing the Filter Definition |
| `onComponent` | fun(component: string,  reject: string\|false) | Called with (component, reject) when a component is valid. reject is the stripped Component name when the entry had the Reject Prefix, otherwise false. |

## parse

Parses a Filter Definition into a single interleaved table.

Entries are stored as name, required pairs: {name, true, name, false, ...}
where true means the Component is required and false means it is rejected.

```lua
parsedFilter = Filter.parse( name, def )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | Name for the Filter. |
| `def` | [FilterDefinition](/api/filter#filterdefinition) | Table containing the Filter Definition |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `parsedFilter` | [ParsedFilter](/api/filter#parsedfilter) | Parsed filter |

## match

Returns true if the Entity matches a parsed Filter.

```lua
boolean = Filter.match( e, filter )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | [Entity](/api/entity#entity) | Entity to check |
| `filter` | [ParsedFilter](/api/filter#parsedfilter) | Parsed filter from Filter.parse |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | boolean |  |

## isValidPool

Checks that a custom Pool implements add, remove, has, and clear as callables.

The Pool may be a table, userdata, lightuserdata, or cdata.

```lua
Filter.isValidPool( name, pool )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | Name of the Filter / Pool |
| `pool` | [Pool](/api/filter#pool) | Pool returned by a custom constructor |

## new

Creates a new Filter

If definition.constructor is set, it is called with the definition to create the Pool.

```lua
filter = Filter.new( name, def )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | Name for the Filter. |
| `def` | [FilterDefinition](/api/filter#filterdefinition) | Table containing the Filter Definition |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `filter` | [Filter](/api/filter#filter) | filter The new Filter |
| `pool` | [Pool](/api/filter#pool) | pool The associated Pool |

## eligible

Checks if an Entity fulfills the Filter requirements.

```lua
boolean = filter:eligible( e )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | [Entity](/api/entity#entity) | Entity to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | boolean |  |

## evaluate

Evaluates an Entity against this Filter and updates the Pool.

Adds the Entity if it became eligible, removes it if it no longer is.

```lua
filter = filter:evaluate( e )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | [Entity](/api/entity#entity) | Entity to evaluate |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `filter` | [Filter](/api/filter#filter) |  |

## add

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
| `boolean` | boolean | added Whether the entity was added or not. |

## remove

Removes an Entity from the Pool associated to this Filter.

```lua
filter = filter:remove( e )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | [Entity](/api/entity#entity) | Entity to remove |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `filter` | [Filter](/api/filter#filter) |  |

## clear

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

## has

Checks if the Pool associated to this Filter contains the passed Entity.

```lua
boolean = filter:has( e )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | [Entity](/api/entity#entity) | Entity to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | boolean | Whether the Entity exists. |

## getName

Gets the name of the Filter

```lua
string = filter:getName()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `string` | string |  |

## Types

### FilterDefinition

List of component names for one filter (`!name` to reject).

Optional `constructor` creates a custom pool instead of the default List.

#### Fields

| Name | Type | Description |
| --- | --- | --- |
| `[integer]` | string |  |
| `constructor?` | fun(def: [FilterDefinition](/api/filter#filterdefinition)): [Pool](/api/filter#pool) |  |

### Pool

Entity collection backing a Filter. Default instances are List; custom constructors must implement add, remove, has, and clear.

#### Fields

| Name | Type | Description |
| --- | --- | --- |
| `add` | fun(self: [Pool](/api/filter#pool),  e: [Entity](/api/entity#entity)): [Pool](/api/filter#pool) |  |
| `remove` | fun(self: [Pool](/api/filter#pool),  e: [Entity](/api/entity#entity)): [Pool](/api/filter#pool)\|nil |  |
| `has` | fun(self: [Pool](/api/filter#pool),  e: [Entity](/api/entity#entity)): boolean |  |
| `clear` | fun(self: [Pool](/api/filter#pool),  ...: any): [Pool](/api/filter#pool) |  |

### ParsedFilter

Interleaved component names and required flags from Filter.parse (`name`, required, ...).

```lua
(string|boolean)[]
```
