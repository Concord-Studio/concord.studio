---
title: "Entity:ensure"
description: "Ensures an Entity has a Component."
slug: api/entity/ensure
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Entity](/api/entity)

### `entity:ensure( name, ... )`

Ensures an Entity has a Component.

If the Component already exists, no action is taken.

```lua
entity:ensure( name, ... )
```

#### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | Name of the ComponentClass |
| `...` | any | Additional arguments to pass to the Component's populate function |

#### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | [Entity](/api/entity#entity) |  |
---

### `entity:ensure( component )`

```lua
entity:ensure( component )
```

Pass an existing Component instance (already populated, not attached to an entity). Skips name and populate arguments.

#### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `component` | [Component](/api/component#component) |  |
