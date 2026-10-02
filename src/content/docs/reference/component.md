---
title: "Component"
description: "A pure data container that is contained by a single entity."
slug: api/component
sidebar:
  order: 3
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
Component = require('concord.component')
```

## Exports

| Name | Type | Description |
| --- | --- | --- |
| `getName` | [`fun(self:`](/api/funself) | Component): string |
| `hasName` | [`fun(self:`](/api/funself) | Component): boolean |
| `serialize` | [`fun(self:`](/api/funself) | Component): table\|nil |
| `deserialize` | [`fun(self:`](/api/funself) | Component, data: table): nil |
| `removed` | [`fun(self:`](/api/funself) | Component, replaced: boolean): nil |


## new

Creates a new ComponentClass and registers it by name.

```lua
component = Component.new( name, populate )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Unique name of the ComponentClass |
| `populate` | `fun(component: Component, ...)` | : nil Function that populates a Component with values |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `component` | `ComponentClass` |  |

## hasName

Returns true if the Component has a name.

```lua
boolean = component:hasName()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## getName

Returns the name of the Component.

```lua
string = component:getName()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `string` | `string` |  |

## removed

Callback for when the Component is removed or replaced in an Entity.

```lua
component:removed( replaced )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `replaced` | `boolean` | True when the Component is being overwritten, false when it is being removed |

## serialize

Callback for when the Component is serialized as part of an Entity.

```lua
component:serialize()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | `table\|nil` | Serialized data, or nil to omit this Component |

## deserialize

Callback for when the Component is deserialized from serialized data.

```lua
component:deserialize( data )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `data` | `table` | Serialized data to copy onto this Component |
