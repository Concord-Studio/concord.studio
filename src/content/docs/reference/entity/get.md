---
title: "Entity:get"
description: "Gets a Component from the Entity."
slug: api/entity/get
sidebar:
  hidden: true
---

[← Entity](/api/entity)

Gets a Component from the Entity.

```lua
entity:get( name )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | Name of the ComponentClass to get |

### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | [Component](/api/component#component)\|nil | The Component, or nil if the Entity does not have it |
