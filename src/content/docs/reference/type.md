---
title: "Type"
description: "Helper module to do easy type checking for Concord types"
slug: api/type
sidebar:
  order: 8
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
Type = require('concord.type')
```

## isCallable

Returns true if the value is a function or has a __call metamethod.

```lua
boolean = Type.isCallable( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | `any` | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## isEntity

Returns if object is an Entity.

```lua
boolean = Type.isEntity( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | `any` | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## isComponentClass

Returns if object is a ComponentClass.

```lua
boolean = Type.isComponentClass( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | `any` | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## isComponent

Returns if object is a Component.

```lua
boolean = Type.isComponent( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | `any` | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## isSystemClass

Returns if object is a SystemClass.

```lua
boolean = Type.isSystemClass( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | `any` | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## isSystem

Returns if object is a System.

```lua
boolean = Type.isSystem( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | `any` | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## isWorld

Returns if object is a World.

```lua
boolean = Type.isWorld( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | `any` | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## isFilter

Returns if object is a Filter.

```lua
boolean = Type.isFilter( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | `any` | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |
