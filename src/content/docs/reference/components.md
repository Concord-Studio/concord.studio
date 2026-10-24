---
title: "Components"
description: "Container for registered ComponentClasses."
slug: api/components
sidebar:
  order: 4
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
concord.component = require('concord.components')
```

## Components

Use `Components.get(name)`, `Components.has(name)`, or `Components[name]` / `Components.name` (same as get; errors if missing).

#### Fields

| Name | Type | Description |
| --- | --- | --- |
| `__REJECT_PREFIX` | string | Reject prefix for filter lists (`"!"`); see `Components.reject` and FilterDefinition |
## Methods

| Method | Description |
| --- | --- |
| [Components.has](/api/components/has) | Returns true if the container has the ComponentClass with the specified name |
| [Components.reject](/api/components/reject) | Prefix a component's name with the currently set Reject Prefix |
| [Components.try](/api/components/try) | Returns true and the ComponentClass if one was registered with the specified name |
| [Components.get](/api/components/get) | Returns the ComponentClass with the specified name |
