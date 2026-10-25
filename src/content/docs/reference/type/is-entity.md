---
title: "Type.isEntity"
description: "Returns true if the value is an Entity instance."
slug: api/type/is-entity
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Type](/api/type)

Returns true if the value is an Entity instance.

Use when accepting arbitrary tables that might be entities (e.g. world APIs, serializers).

```lua
isEntity = Type.isEntity( t )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `t` | any | Object to check |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `isEntity` | boolean |  |
