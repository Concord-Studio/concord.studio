---
title: "Filter.new"
description: "Creates a new Filter"
slug: api/filter/new
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Filter](/api/filter)

Creates a new Filter

If definition.constructor is set, it is called with the definition to create the Pool.

```lua
filter = Filter.new( name, def )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | Name for the Filter. |
| `def` | [FilterDefinition](/api/filter/filter-definition) | Table containing the Filter Definition |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `filter` | [Filter](/api/filter#filter) | The new Filter |
| `pool` | [Pool](/api/filter/pool) | The associated Pool |
