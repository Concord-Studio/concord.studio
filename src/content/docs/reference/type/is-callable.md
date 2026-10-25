---
title: "Type.isCallable"
description: "Returns true if the value is a function or has a `__call` metamethod."
slug: api/type/is-callable
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Type](/api/type)

Returns true if the value is a function or has a `__call` metamethod.

Use before treating a value as a populate function, pool constructor, or generator.

```lua
callable = Type.isCallable( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | any | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `callable` | boolean |  |
