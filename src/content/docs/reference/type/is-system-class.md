---
title: "Type.isSystemClass"
description: "Returns true if the value is a SystemClass template (not a live system instance)."
slug: api/type/is-system-class
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Type](/api/type)

Returns true if the value is a SystemClass template (not a live system instance).

Use before `World:addSystem`, `World:hasSystem`, or `World:getSystem`.

```lua
isSystemClass = Type.isSystemClass( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | any | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `isSystemClass` | boolean |  |
