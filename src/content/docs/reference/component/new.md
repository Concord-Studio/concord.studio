---
title: "Component.new"
description: "Creates a new ComponentClass and registers it by name."
slug: api/component/new
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Component](/api/component)

Creates a new ComponentClass and registers it by name.

`Component("name", populate?)` is equivalent to this function.
Populate receives the new component instance and `:give` / `:ensure` arguments.

```lua
component = Component.new( name, populate )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | Unique name of the ComponentClass |
| `populate` | fun(component: [Component](/api/component#component), ...): nil | Function that populates a Component with values |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `component` | [ComponentClass](/api/component/component-class) |  |

### See also

- [Entity:give](/api/entity/give)
