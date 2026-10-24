---
title: "Type.isSystemClass"
description: "Returns true if the value is a SystemClass template (not a live system instance)."
slug: api/type/is-system-class
sidebar:
  hidden: true
---

[← Type](/api/type)

Returns true if the value is a SystemClass template (not a live system instance).

Use before `World:addSystem`, `World:hasSystem`, or `World:getSystem`.

```lua
boolean = Type.isSystemClass( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | any | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | boolean |  |
