---
title: "World:getSystem"
description: "Gets a System from the World."
slug: api/world/get-system
sidebar:
  hidden: true
---

[← World](/api/world)

Gets a System from the World.

```lua
world:getSystem( systemClass )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `systemClass` | [SystemClass](/api/system/system-class) | SystemClass of System to get |

### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | [System](/api/system#system)\|nil | The system instance, or nil if the class was not added |
