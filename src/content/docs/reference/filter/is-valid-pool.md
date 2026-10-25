---
title: "Filter.isValidPool"
description: "Checks that a custom Pool implements add, remove, has, and clear as callables."
slug: api/filter/is-valid-pool
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Filter](/api/filter)

Checks that a custom Pool implements add, remove, has, and clear as callables.

The Pool may be a table, userdata, lightuserdata, or cdata.

```lua
Filter.isValidPool( name, pool )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | Name of the Filter / Pool |
| `pool` | [Pool](/api/filter/pool) | Pool returned by a custom constructor |
