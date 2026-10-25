---
title: "Type.isComponentClass"
description: "Returns true if the value is a registered ComponentClass (not a component instance)."
slug: api/type/is-component-class
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Type](/api/type)

Returns true if the value is a registered ComponentClass (not a component instance).

Use before `World`-level APIs that expect a class, or when validating `Component.new` results.

```lua
isComponentClass = Type.isComponentClass( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | any | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `isComponentClass` | boolean |  |
