---
title: "Entity"
description: "An object in a World that holds Components processed by Systems."
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

## Entity

Components are stored as fields named after the component (`entity.position` after `:give("position", ...)`).
Prefer `:give`, `:get`, and `:has` so unregistered names error instead of silently failing.
`Entity(...)` is equivalent to `Entity.new(...)`.

#### Fields

| Name | Type | Description |
| --- | --- | --- |
| `SERIALIZE_BY_DEFAULT` | boolean | When true, `Entity.new` auto-`:give("serializable")` (see built-in Serializable) |

#### Private fields

| Name | Type | Description |
| --- | --- | --- |
| `__world?` | [World](/api/world#world) |  |
## Methods

| Method | Description |
| --- | --- |
| [Entity.new](/api/entity/new) | Creates a new Entity. Optionally queues it to be added to a World. |
| [Entity:give](/api/entity/give) | Gives an Entity a Component. |
| [Entity:ensure](/api/entity/ensure) | Ensures an Entity has a Component. |
| [Entity:remove](/api/entity/remove) | Removes a Component from an Entity. |
| [Entity:assemble](/api/entity/assemble) | Assembles an Entity by calling `assemblage(self, ...)` and returning `self`. |
| [Entity:destroy](/api/entity/destroy) | Destroys the Entity. |
| [Entity:has](/api/entity/has) | Returns true if the Entity has a Component. |
| [Entity:get](/api/entity/get) | Gets a Component from the Entity. |
| [Entity:getComponents](/api/entity/get-components) | Returns a shallow copy of the Entity's fields, excluding __world and __isEntity. |
| [Entity:inWorld](/api/entity/in-world) | Returns true if the Entity has been assigned a World. |
| [Entity:getWorld](/api/entity/get-world) | Returns the World the Entity is in, or nil when not in a world. |
| [Entity:serialize](/api/entity/serialize) | Serializes the Entity's Components. |
| [Entity:deserialize](/api/entity/deserialize) | Deserializes Components onto the Entity from the array portion of serialized data. |
