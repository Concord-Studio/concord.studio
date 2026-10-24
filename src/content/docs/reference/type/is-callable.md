---
title: "Type.isCallable"
description: "Returns true if the value is a function or has a `__call` metamethod."
slug: api/type/is-callable
sidebar:
  hidden: true
---

[← Type](/api/type)

Returns true if the value is a function or has a `__call` metamethod.

Use before treating a value as a populate function, pool constructor, or generator.

```lua
boolean = Type.isCallable( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | any | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | boolean |  |
