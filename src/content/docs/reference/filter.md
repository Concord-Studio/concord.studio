---
title: "Filter"
description: "List of component names for one filter (`!name` to reject, or `Components.reject`)."
slug: api/filter
sidebar:
  order: 6
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
Filter = require('concord.filter')
```

## Filter

Used to filter Entities with specific Components.

A Filter has an associated Pool that can contain any amount of Entities.
`Filter(...)` is equivalent to `Filter.new(...)`.

## Methods

| Method | Description |
| --- | --- |
| [Filter.validate](/api/filter/validate) | Validates a Filter Definition to make sure every component is valid. |
| [Filter.parse](/api/filter/parse) | Parses a Filter Definition into a single interleaved table. |
| [Filter.match](/api/filter/match) | Returns true if the Entity matches a parsed Filter. |
| [Filter.isValidPool](/api/filter/is-valid-pool) | Checks that a custom Pool implements add, remove, has, and clear as callables. |
| [Filter.new](/api/filter/new) | Creates a new Filter |
| [Filter:eligible](/api/filter/eligible) | Checks if an Entity fulfills the Filter requirements. |
| [Filter:evaluate](/api/filter/evaluate) | Evaluates an Entity against this Filter and updates the Pool. |
| [Filter:add](/api/filter/add) | Adds an Entity to the Pool, if it passes the Filter. |
| [Filter:remove](/api/filter/remove) | Removes an Entity from the Pool associated to this Filter. |
| [Filter:clear](/api/filter/clear) | Clears the Pool associated to this Filter. |
| [Filter:has](/api/filter/has) | Checks if the Pool associated to this Filter contains the passed Entity. |
| [Filter:getName](/api/filter/get-name) | Gets the name of the Filter |

## Types

| Type | Description |
| --- | --- |
| [FilterDefinition](/api/filter/filter-definition) | List of component names for one filter (`!name` to reject, or `Components.reject`). |
| [Pool](/api/filter/pool) | Entity collection backing a Filter. Default instances are List; custom constructors must implement add, remove, has, and clear. |
| [ParsedFilter](/api/filter/parsed-filter) | Interleaved component names and required flags from Filter.parse (`name`, required, ...). |
