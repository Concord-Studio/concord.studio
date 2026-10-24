---
title: "World:query"
description: "Queries flushed Entities against a Filter definition."
slug: api/world/query
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← World](/api/world)

### `world:query( def, onMatch )`

Queries flushed Entities against a Filter definition.

Pending (not yet flushed) additions are not included. Component changes on
already flushed Entities are visible immediately.

```lua
world:query( def, onMatch )
```

Pass a function as onMatch. It is called once per matching Entity. Nothing is returned.

#### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `def` | [FilterDefinition](/api/filter/filter-definition) | Filter definition (component names, with ! prefix to reject) |
| `onMatch` | fun(e: [Entity](/api/entity#entity)) | Called for each match. |
---

### `matches = world:query( def, onMatch )`

```lua
matches = world:query( def, onMatch )
```

Collect matches into a table and return it. onMatch is optional; when omitted, a new empty table is used.

#### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `def` | [FilterDefinition](/api/filter/filter-definition) | Filter definition (component names, with ! prefix to reject) |
| `onMatch?` | table? | Optional. Table to fill with matches; when omitted, a new empty table is allocated and returned. |

#### Returns

| Name | Type | Description |
| --- | --- | --- |
| `matches` | table | The list of matches, or nil if onMatch was a callback |
