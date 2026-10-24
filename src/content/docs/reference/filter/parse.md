---
title: "Filter.parse"
description: "Parses a Filter Definition into a single interleaved table."
slug: api/filter/parse
sidebar:
  hidden: true
---

[← Filter](/api/filter)

Parses a Filter Definition into a single interleaved table.

Entries are stored as name, required pairs: {name, true, name, false, ...}
where true means the Component is required and false means it is rejected.

```lua
parsedFilter = Filter.parse( name, def )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | Name for the Filter. |
| `def` | [FilterDefinition](/api/filter/filter-definition) | Table containing the Filter Definition |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `parsedFilter` | [ParsedFilter](/api/filter/parsed-filter) | Parsed filter |
