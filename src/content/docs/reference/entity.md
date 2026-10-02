---
title: "Entity"
description: "An object that exists in a world. An entity"
slug: api/entity
sidebar:
  order: 5
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
concord.entity = require('concord.entity')
```

## Exports

| Name | Type | Description |
| --- | --- | --- |
| `has` | [`fun(self:`](/api/funself) | Entity, name: string): boolean |
| `remove` | [`fun(self:`](/api/funself) | Entity, name: string): Entity |


## new

Creates a new Entity. Optionally queues it to be added to a World.

If Entity.SERIALIZE_BY_DEFAULT is true, the Entity is given a "serializable" Component.

```lua
entity = Entity.new( world )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` | World to add the entity to |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `entity` | `Entity` |  |

## give

Gives an Entity a Component.

If the Component already exists, it's overridden by this new Component.

```lua
entity:give( name, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the ComponentClass |
| `...` | `any` | Additional arguments to pass to the Component's populate function |

### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | `Entity` |  |
---

```lua
entity:give( component )
```

Pass an existing Component instance (already populated, not attached to an entity). Skips name and populate arguments.

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `component` | `Component` |  |

## ensure

Ensures an Entity has a Component.

If the Component already exists, no action is taken.

```lua
entity:ensure( name, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the ComponentClass |
| `...` | `any` | Additional arguments to pass to the Component's populate function |

### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | `Entity` |  |
---

```lua
entity:ensure( component )
```

Pass an existing Component instance (already populated, not attached to an entity). Skips name and populate arguments.

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `component` | `Component` |  |

## remove

Removes a Component from an Entity.

```lua
entity:remove( name )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the ComponentClass to remove |

### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | `Entity` |  |

## assemble

Assembles an Entity.

```lua
entity:assemble( assemblage, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `assemblage` | `fun(entity: Entity, ...)` | Function that will assemble an entity |
| `...` | `any` | Additional arguments to pass to the assemblage function. |

### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | `Entity` |  |

## destroy

Destroys the Entity.

Queues removal from its World if it's in one. The Entity stays in the World until the next flush.

```lua
entity:destroy()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | `Entity` |  |

## has

Returns true if the Entity has a Component.

```lua
boolean = entity:has( name )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the ComponentClass to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## get

Gets a Component from the Entity.

```lua
entity:get( name )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the ComponentClass to get |

### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | `Component\|nil` | The Component, or nil if the Entity does not have it |

## getComponents

Returns a shallow copy of the Entity's fields, excluding __world and __isEntity.

This is primarily the Entity's Components. Extra non-component fields are also copied.
Mutating a copied Component still mutates the Entity's Component.

```lua
matches = entity:getComponents( output )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `output` | `table` | Table to copy into. A new table is created if omitted. |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `matches` | `table` |  |

## inWorld

Returns true if the Entity has been assigned a World.

True as soon as addition is queued, and remains true until removal is flushed.

```lua
boolean = entity:inWorld()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## getWorld

Returns the World the Entity is in.

```lua
world = entity:getWorld()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` |  |

## serialize

Serializes the Entity's Components.

Components that return nil from serialize are omitted.

```lua
matches = entity:serialize( ignoreKey )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `ignoreKey` | `boolean` | If true, the key Component is omitted |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `matches` | `table` | Serialized Entity data |

## deserialize

Deserializes Components onto the Entity.

```lua
entity:deserialize( data )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `data` | `table` | Serialized Entity data |
