---
title: "Concord"
description: "A feature-complete ECS library."
slug: api
sidebar:
  order: 0
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
Concord = require('concord')
```

## Concord

Entry point: `local Concord = require("concord")` (adjust the path to your package layout).
Exports `Entity`, `Component`, `Components`, `System`, `World`, `Filter`, `List`, `Type`, `utils`, and `builtins`.
Types are callable constructors, e.g. `Concord.World()`, `Concord.Entity(world)`.
Lowercase field names are deprecated compatibility aliases for the uppercase types.

#### Fields

| Name | Type | Description |
| --- | --- | --- |
| `Entity` | [Entity](/api/entity#entity) |  |
| `Component` | [Component](/api/component#component) |  |
| `Components` | [Components](/api/components#components) |  |
| `System` | [System](/api/system#system) |  |
| `World` | [World](/api/world#world) |  |
| `Filter` | [Filter](/api/filter#filter) |  |
| `List` | [List](/api/list#list) |  |
| `Type` | [Type](/api/type#type) |  |
| `utils` | [Utils](/api/utils#utils) |  |
| `builtins` | [Builtins](/api/builtins#builtins) |  |
| `_VERSION` | string |  |
| `_DESCRIPTION` | string |  |
| `_LICENCE` | string |  |

## Classes

- [Component](/api/component) — A pure data container attached to a single Entity.
- [Entity](/api/entity) — An object in a World that holds Components processed by Systems.
- [Filter](/api/filter) — List of component names for one filter (`!name` to reject, or `Components.reject`).
- [List](/api/list) — Data structure that allows for fast removal at the cost of order.
- [System](/api/system) — Iterates over Entities, reads their Components, and updates game state.
- [World](/api/world) — A collection of Systems and Entities.

## Sub-modules

- [Components](/api/components) — Container for registered ComponentClasses.
- [Type](/api/type) — Runtime type predicates for Concord values (extension code, tooling, defensive checks).
- [Utils](/api/utils) — Helper module for misc operations
- [Overview](/api/builtins) — All the built-in components.
