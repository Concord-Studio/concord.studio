---
title: "Type"
description: "Runtime type predicates for Concord values (extension code, tooling, defensive checks)."
slug: api/type
sidebar:
  order: 9
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
concord.type = require('concord.type')
```

## Methods

| Method | Description |
| --- | --- |
| [Type.isCallable](/api/type/is-callable) | Returns true if the value is a function or has a `__call` metamethod. |
| [Type.isEntity](/api/type/is-entity) | Returns true if the value is an Entity instance. |
| [Type.isComponentClass](/api/type/is-component-class) | Returns true if the value is a registered ComponentClass (not a component instance). |
| [Type.isComponent](/api/type/is-component) | Returns true if the value is a Component instance attached to an entity. |
| [Type.isSystemClass](/api/type/is-system-class) | Returns true if the value is a SystemClass template (not a live system instance). |
| [Type.isSystem](/api/type/is-system) | Returns true if the value is a System instance belonging to a World. |
| [Type.isWorld](/api/type/is-world) | Returns true if the value is a World instance. |
| [Type.isFilter](/api/type/is-filter) | Returns true if the value is a Filter instance (internal pool driver; rarely needed in game code). |
