---
title: "Type.isComponent"
description: "Returns true if the value is a Component instance attached to an entity."
slug: api/type/is-component
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Type](/api/type)

Returns true if the value is a Component instance attached to an entity.

Use when iterating entity fields or handling `Entity:give` component-instance overload.

```lua
isComponent = Type.isComponent( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | any | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `isComponent` | boolean |  |
