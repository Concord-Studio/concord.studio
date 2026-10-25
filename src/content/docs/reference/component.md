---
title: "Component"
description: "A pure data container attached to a single Entity."
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
concord.component = require('concord.component')
```

## Component

Component instances are created when an Entity `:give`s the class; populate runs at attach time.

## Methods

| Method | Description |
| --- | --- |
| [Component.new](/api/component/new) | Creates a new ComponentClass and registers it by name. |
| [Component:hasName](/api/component/has-name) | Returns true if the Component has a name. |
| [Component:getName](/api/component/get-name) | Returns the name of the Component. |
| [Component:removed](/api/component/removed) | Callback for when the Component is removed or replaced in an Entity. |
| [Component:serialize](/api/component/serialize) | Callback for when the Component is serialized as part of an Entity. |
| [Component:deserialize](/api/component/deserialize) | Callback for when the Component is deserialized from serialized data. |

## Types

| Type | Description |
| --- | --- |
| [ComponentClass](/api/component/component-class) | Registered component type returned by `Component.new` / `Component()`. |
