---
title: "Filter:add"
description: "Adds an Entity to the Pool, if it passes the Filter."
slug: api/filter/add
sidebar:
  hidden: true
---

[← Filter](/api/filter)

Adds an Entity to the Pool, if it passes the Filter.

```lua
filter = filter:add( e, bypass )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `e` | [Entity](/api/entity#entity) | Entity to add |
| `bypass` | boolean | Whether to bypass the Filter or not. |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `filter` | [Filter](/api/filter#filter) |  |
| `boolean` | boolean | added Whether the entity was added or not. |
