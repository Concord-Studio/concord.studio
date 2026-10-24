---
title: "System"
description: "Iterates over Entities, reads their Components, and updates game state."
slug: api/system
sidebar:
  order: 8
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
System = require('concord.system')
```

## System

A SystemClass is a template registered on a World via `World:addSystem`.
Each instance belongs to one World and holds zero or more Pools (one per filter key in the definition).
**Pools:** Keys in the definition table become fields on the system instance, each holding a `Pool`
(default `List`). Iterate with `ipairs(system.poolName)`; when the pool is a `List`, use `pool.size`.
**Event listeners:** Every function on the SystemClass except `init`, `onEnabled`, and `onDisabled`
is registered when the system is added. `World:emit("callbackName", ...)` invokes those functions
on enabled system instances. Use `System.new("Name", ...)` and `World:emit("Name.callback", ...)`
to target one system.
**Flush and pools:** On `World:flush`, added, removed, and dirty Entities are processed;
each system's filters re-evaluate matching Entities and update pool membership.

#### Fields

| Name | Type | Description |
| --- | --- | --- |
| `ENABLE_OPTIMIZATION` | boolean | When true, shallow-copies class methods onto each instance for faster access (default true) |
## Methods

| Method | Description |
| --- | --- |
| [System.new](/api/system/new) | Creates a new SystemClass. The return value is a class; the World constructs instances when the class is added. |
| [System:setEnabled](/api/system/set-enabled) | Sets whether the System is enabled. |
| [System:isEnabled](/api/system/is-enabled) | Returns whether the System is enabled (enabled systems receive emit callbacks). |
| [System:getWorld](/api/system/get-world) | Returns the World the System is in. |
| [System:init](/api/system/init) | Callback for system initialization. |
| [System:onEnabled](/api/system/on-enabled) | Callback when the system becomes enabled via `setEnabled(true)`. |
| [System:onDisabled](/api/system/on-disabled) | Callback when the system becomes disabled via `setEnabled(false)`. |

## Types

| Type | Description |
| --- | --- |
| [SystemClass](/api/system/system-class) | Registered system type returned by `System.new` / `System()`. |
