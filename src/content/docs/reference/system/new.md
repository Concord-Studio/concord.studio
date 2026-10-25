---
title: "System.new"
description: "Creates a new SystemClass. The return value is a class; the World constructs instances when the class is added."
slug: api/system/new
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← System](/api/system)

### `system = System.new( name, definition )`

Creates a new SystemClass. The return value is a class; the World constructs instances when the class is added.

Reject components in filter lists with the `!` prefix or `Components.reject` (same rules as `FilterDefinition`).

```lua
system = System.new( name, definition )
```

#### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | Name of the System. If the first argument is not a string, it is treated as the definition. |
| `definition` | table<string, [FilterDefinition](/api/filter/filter-definition)> | Map of pool names to filter definitions (component names, optional `!` reject entries) |

#### Returns

| Name | Type | Description |
| --- | --- | --- |
| `system` | [SystemClass](/api/system/system-class) |  |
---


### `system = System.new( definition )`

```lua
system = System.new( definition )
```

#### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `definition` | table<string, [FilterDefinition](/api/filter/filter-definition)> | Map of pool names to filter definitions (component names, optional `!` reject entries) |

#### Returns

| Name | Type | Description |
| --- | --- | --- |
| `system` | [SystemClass](/api/system/system-class) |  |
