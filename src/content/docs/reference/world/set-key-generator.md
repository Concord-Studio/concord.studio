---
title: "World:setKeyGenerator"
description: "Sets the function used to generate Entity keys."
slug: api/world/set-key-generator
sidebar:
  hidden: true
---

[← World](/api/world)

Sets the function used to generate Entity keys.

```lua
world = world:setKeyGenerator( generator, initialState )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `generator` | fun(state: any): string\|number, | any Callable that receives the current state and returns key, newState |
| `initialState` | any | Initial state passed to the generator |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | [World](/api/world#world) |  |
