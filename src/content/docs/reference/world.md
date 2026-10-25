---
title: "World"
description: "A collection of Systems and Entities."
slug: api/world
sidebar:
  order: 11
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
concord.system = require('concord.world')
```

## World

A World emits events so Systems can iterate their Pools.
A World contains any amount of Systems and Entities, plus optional named resources.
`World(...)` is equivalent to `World.new(...)`.
Override optional callbacks below on the world instance (methods are copied onto each instance at creation).

#### Fields

| Name | Type | Description |
| --- | --- | --- |
| `ENABLE_OPTIMIZATION` | boolean | When true, shallow-copies class methods onto each instance for faster access (default true) |

## Methods

| Method | Description |
| --- | --- |
| [World.new](/api/world/new) | Creates a new World. |
| [World:addEntity](/api/world/add-entity) | Queues an Entity to be added to the World. |
| [World:newEntity](/api/world/new-entity) | Creates a new Entity and queues it to be added to the World. |
| [World:query](/api/world/query) | Queries flushed Entities against a Filter definition. |
| [World:removeEntity](/api/world/remove-entity) | Queues an Entity to be removed from the World. |
| [World:canFlush](/api/world/can-flush) | Returns whether a Flush can currently be performed. |
| [World:flush](/api/world/flush) | Applies queued Entity additions, removals, and dirty reevaluations. |
| [World:addSystem](/api/world/add-system) | Adds a System to the World. |
| [World:addSystems](/api/world/add-systems) | Adds multiple Systems to the World. |
| [World:hasSystem](/api/world/has-system) | Returns whether the World has a System. |
| [World:getSystem](/api/world/get-system) | Gets a System from the World. |
| [World:emit](/api/world/emit) | Emits a callback in the World. |
| [World:emitNoFlush](/api/world/emit-no-flush) | Emits a callback in the World without flushing. |
| [World:clear](/api/world/clear) | Removes all Entities from the World and flushes. |
| [World:getEntities](/api/world/get-entities) | Returns the List of flushed Entities in the World. |
| [World:getSystems](/api/world/get-systems) | Returns the List of Systems in the World. |
| [World:serialize](/api/world/serialize) | Serializes serializable Entities in the World. |
| [World:deserialize](/api/world/deserialize) | Deserializes Entities into the World. |
| [World:setKeyGenerator](/api/world/set-key-generator) | Sets the function used to generate Entity keys. |
| [World:getEntityByKey](/api/world/get-entity-by-key) | Gets an Entity by its key. |
| [World:setResource](/api/world/set-resource) | Sets a named resource on the World (singleton shared state, not an Entity Component). |
| [World:getResource](/api/world/get-resource) | Gets a named resource from the World. |
| [World:onEntityAdded](/api/world/on-entity-added) | Callback for when an Entity is added to the World. |
| [World:onEntityRemoved](/api/world/on-entity-removed) | Callback for when an Entity is removed from the World. |
| [World:beforeEmit](/api/world/before-emit) | Callback before World:emit forwards an event to Systems. |
| [World:afterEmit](/api/world/after-emit) | Callback after World:emit has forwarded an event to Systems. |
| [World:beforeSystemCallback](/api/world/before-system-callback) | Callback before World:emit forwards an event to a System. |
| [World:afterSystemCallback](/api/world/after-system-callback) | Callback after World:emit has forwarded an event to a System. |

## Types

| Type | Description |
| --- | --- |
| [SerializedWorld](/api/world/serialized-world) | Payload from `World:serialize`, passed to `World:deserialize`. |
