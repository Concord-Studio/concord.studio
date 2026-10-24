---
title: "World:setResource"
description: "Sets a named resource on the World (singleton shared state, not an Entity Component)."
slug: api/world/set-resource
sidebar:
  hidden: true
---

[← World](/api/world)

Sets a named resource on the World (singleton shared state, not an Entity Component).

Typical uses: services, asset handles, or frame context accessible from Systems.

```lua
world = world:setResource( name, resource )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | Name of the resource |
| `resource` | any | Resource to set |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | [World](/api/world#world) |  |
