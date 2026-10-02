---
title: "World"
description: "A collection of Systems and Entities."
slug: api/world
sidebar:
  order: 10
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
World = require('concord.world')
```

## Exports

| Name | Type | Description |
| --- | --- | --- |
| `addEntity` | [`fun(self:`](/api/funself) | World, e: Entity): World |


## new

Creates a new World.

```lua
world = World.new( ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `...` | `SystemClass` | SystemClasses of Systems to add |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` | The new World |

See also: `World#addSystems`

## addEntity

Queues an Entity to be added to the World.

The Entity's world is set immediately. The Entity is not in getEntities()
and is not evaluated by Systems until the next flush.

```lua
world = world:addEntity( e )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | `Entity` | Entity to add |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` |  |

## newEntity

Creates a new Entity and queues it to be added to the World.

```lua
world:newEntity()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `e` | `Entity` | the new Entity |

## query

Queries flushed Entities against a Filter definition.

Pending (not yet flushed) additions are not included. Component changes on
already flushed Entities are visible immediately.

```lua
world:query( def, onMatch )
```

Pass a function as onMatch. It is called once per matching Entity. Nothing is returned.

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `def` | `FilterDefinition` | Filter definition (component names, with ! prefix to reject) |
| `onMatch` | `fun(e: Entity)` | Called for each match. |
---

```lua
matches = world:query( def, onMatch )
```

Collect matches into a table and return it. onMatch is optional; when omitted, a new empty table is used.

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `def` | `FilterDefinition` | Filter definition (component names, with ! prefix to reject) |
| `onMatch?` | `table?` | Optional. Table to fill with matches; when omitted, a new empty table is allocated and returned. |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `matches` | `table` | The list of matches, or nil if onMatch was a callback |

## removeEntity

Queues an Entity to be removed from the World.

If the Entity has a key Component, it is removed first.
The Entity remains in the World until the next flush.

```lua
world = world:removeEntity( e )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | `Entity` | Entity to remove |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` |  |

## canFlush

Returns whether a Flush can currently be performed.

Flushing is forbidden while a Flush is already in progress
(for example from World:onEntityAdded / Pool:onAdded).

```lua
boolean = world:canFlush()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## flush

Applies queued Entity additions, removals, and dirty reevaluations.

Only the queued buffers are processed, not every Entity in the World.

```lua
world = world:flush()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` |  |

## addSystem

Adds a System to the World.

Functions on the SystemClass are registered as event listeners.
Entities already in the World are evaluated against the System's Filters.

```lua
world = world:addSystem( systemClass )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `systemClass` | `SystemClass` | SystemClass of System to add |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` |  |

See also: `World#emit`

## addSystems

Adds multiple Systems to the World.

Functions on each SystemClass are registered as event listeners.

```lua
world = world:addSystems( ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `...` | `SystemClass` | SystemClasses of Systems to add |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` |  |

See also: `World#addSystem`

See also: `World#emit`

## hasSystem

Returns whether the World has a System.

```lua
boolean = world:hasSystem( systemClass )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `systemClass` | `SystemClass` | SystemClass of System to check for |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## getSystem

Gets a System from the World.

```lua
system = world:getSystem( systemClass )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `systemClass` | `SystemClass` | SystemClass of System to get |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `system` | `System` | System to get |

## emit

Emits a callback in the World.

Calls all functions with the functionName of added Systems.
Prefix the name with a System's name to target one System: `"SystemName.event"`.
Automatically flushes before forwarding the event, unless this emit is nested
or a flush is already in progress.
If beforeEmit exists and returns a truthy value, listeners are skipped.
afterEmit is called after listeners when present.

```lua
world = world:emit( functionName, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `functionName` | `string` | Event name, or `"SystemName.event"` to call only that System |
| `...` | `any` | Parameters passed to System's functions |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` |  |

## emitNoFlush

Emits a callback in the World without flushing.

```lua
world = world:emitNoFlush( functionName, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `functionName` | `string` | Name of functions to call. |
| `...` | `any` | Parameters passed to System's functions |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` |  |

See also: `World#emit`

## clear

Removes all Entities from the World and flushes.

Entities that were queued to be added are detached immediately without
onEntityRemoved. Already flushed Entities are removed through the normal flush.

```lua
world = world:clear()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` |  |

## getEntities

Returns the List of flushed Entities in the World.

```lua
list = world:getEntities()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `list` | `List` |  |

## getSystems

Returns the List of Systems in the World.

```lua
list = world:getSystems()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `list` | `List` |  |

## serialize

Serializes serializable Entities in the World.

Flushes first. Only Entities with a serializable Component are included.

```lua
serializedWorld = world:serialize( ignoreKeys )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `ignoreKeys` | `boolean` | If true, Entity keys are omitted |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `serializedWorld` | `SerializedWorld` | Serialized world data |

## deserialize

Deserializes Entities into the World.

```lua
world = world:deserialize( data, startClean, ignoreGenerator )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `data` | `SerializedWorld` | Serialized world data |
| `startClean` | `boolean` | If true, existing Entities are cleared first |
| `ignoreGenerator` | `boolean` | If true, the World's key generator state is left unchanged |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` |  |

## setKeyGenerator

Sets the function used to generate Entity keys.

```lua
world = world:setKeyGenerator( generator, initialState )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `generator` | `fun(state: any)` | : string\|number, any Callable that receives the current state and returns key, newState |
| `initialState` | `any` | Initial state passed to the generator |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` |  |

## getEntityByKey

Gets an Entity by its key.

```lua
world:getEntityByKey( key )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `key` | `string\|number` | Key to look up |

### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | `Entity\|nil` |  |

## setResource

Sets a named resource in the World.

```lua
world = world:setResource( name, resource )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the resource |
| `resource` | `any` | Resource to set |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` |  |

## getResource

Gets a named resource from the World.

```lua
any = world:getResource( name )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the resource |

## onEntityAdded

Callback for when an Entity is added to the World.

```lua
world:onEntityAdded( e )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | `Entity` | The Entity that was added |

## onEntityRemoved

Callback for when an Entity is removed from the World.

```lua
world:onEntityRemoved( e )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | `Entity` | The Entity that was removed |

## beforeEmit

Callback before World:emit forwards an event to Systems.

Returning a truthy value skips System listeners and afterEmit for this emit.
Nested emits are forbidden inside this callback

```lua
boolean = world:beforeEmit( systemName, functionName, listeners, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `systemName` | `string` | System name when emit used `"SystemName.event"`, otherwise nil |
| `functionName` | `string` | Name of the event being emitted |
| `listeners` | `table` | Listeners registered for this event, or nil |
| `...` | `any` | Parameters passed to World:emit |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean?` | Truthy to skip listeners |

## afterEmit

Callback after World:emit has forwarded an event to Systems.

Not called when beforeEmit skips the emit
Nested emits are forbidden inside this callback

```lua
world:afterEmit( systemName, functionName, listeners, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `systemName` | `string` | System name when emit used `"SystemName.event"`, otherwise nil |
| `functionName` | `string` | Name of the event being emitted |
| `listeners` | `table` | Listeners registered for this event, or nil |
| `...` | `any` | Parameters passed to World:emit |

## beforeSystemCallback

Callback before World:emit forwards an event to a System.

Returning a truthy value skips the System listener and afterSystemCallback for this event.
Nested emits are forbidden inside this callback

```lua
boolean = world:beforeSystemCallback( system, eventName, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `system` | `System` | System that is being called |
| `eventName` | `string` | Name of the event being emitted |
| `...` | `any` | Parameters passed to World:emit |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean?` | Truthy to skip the System listener and afterSystemCallback |

## afterSystemCallback

Callback after World:emit has forwarded an event to a System.

Not called when beforeSystemCallback skips the emit
Nested emits are forbidden inside this callback

```lua
world:afterSystemCallback( system, eventName, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `system` | `System` | System that is being called |
| `eventName` | `string` | Name of the event being emitted |
| `...` | `any` | Parameters passed to World:emit |
