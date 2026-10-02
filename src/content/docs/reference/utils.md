---
title: "Utils"
description: "Helper module for misc operations"
slug: api/utils
sidebar:
  order: 9
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
Utils = require('concord.utils')
```

## error

Raises a formatted error.

```lua
Utils.error( level, str, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `level` | `integer` | Error level passed to error(), plus one |
| `str` | `string` | Format string |
| `...` | `any` | Format arguments |

## shallowCopy

Copies keys from orig into target. Existing keys in target are overwritten.

```lua
matches = Utils.shallowCopy( orig, target )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `orig` | `table` | Table to copy from |
| `target` | `table` | Table to copy into |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `matches` | `table` | target |

## loadNamespace

Requires files and stores them in a namespace table.

Accepts a table of require paths: {"path/to/file_1", "path/to/another/file_2", "etc"}
Accepts a path to a directory of Lua files: "my_files/here"
Directory loading uses love.filesystem and requires LÖVE.
If namespace is omitted, files are still required and this function returns nil.

```lua
Utils.loadNamespace( pathOrFiles, namespace )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `pathOrFiles` | `string\|table` | A directory path or a table of require paths |
| `namespace` | `table` | Table that will hold the required files |

### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | `table\|nil` | namespace The namespace table |
