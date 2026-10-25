---
title: "Entity:give"
description: "Gives an Entity a Component."
slug: api/entity/give
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Entity](/api/entity)

### `entity = entity:give( name, ... )`

Gives an Entity a Component.

If the Component already exists, it's overridden by this new Component.

```lua
entity = entity:give( name, ... )
```

#### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | Name of the ComponentClass |
| `...` | any | Additional arguments to pass to the Component's populate function |

#### Returns

| Name | Type | Description |
| --- | --- | --- |
| `entity` | [Entity](/api/entity#entity) |  |
---


### `entity = entity:give( component )`

```lua
entity = entity:give( component )
```

Pass an existing Component instance (already populated, not attached to an entity). Skips name and populate arguments.

#### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `component` | [Component](/api/component#component) |  |

#### Returns

| Name | Type | Description |
| --- | --- | --- |
| `entity` | [Entity](/api/entity#entity) |  |

### Usage

```lua
Concord.Component("position", function (component, x, y)
  component.x = x or 0
  component.y = y or 0
end)

entity:give("position", 10, 20) -- 10 and 20 are passed to populate after `component`
```

### See also

- [Component:removed](/api/component/removed)
