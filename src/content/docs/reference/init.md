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


## Classes

- [Component](/api/component) — A pure data container that is contained by a single entity.
- [Entity](/api/entity) — An object that exists in a world. An entity
- [List](/api/list) — Data structure that allows for fast removal at the cost of order.
- [System](/api/system) — Iterates over Entities. From these Entities it gets Components and modifies them.
- [World](/api/world) — A collection of Systems and Entities.

## Sub-modules

- [Components](/api/components) — Container for registered ComponentClasses
- [Type](/api/type) — Helper module to do easy type checking for Concord types
- [Utils](/api/utils) — Helper module for misc operations
- [Overview](/api/builtins) — All the built-in components.
