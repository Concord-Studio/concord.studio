---
title: "Utils.loadNamespace"
description: "Requires files and stores them in a namespace table."
slug: api/utils/load-namespace
sidebar:
  hidden: true
---

[← Utils](/api/utils)

Requires files and stores them in a namespace table.

Accepts a table of require paths: {"path/to/file_1", "path/to/another/file_2", "etc"}
Accepts a path to a directory of Lua files: "my_files/here"
Directory loading uses love.filesystem and requires LÖVE.
If namespace is omitted, modules are still `require`d (side effect only) and this function returns nil.

```lua
Utils.loadNamespace( pathOrFiles, namespace )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `pathOrFiles` | string\|table | A directory path or a table of require paths |
| `namespace` | table | Table that will hold the required files |

### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | table\|nil | namespace The namespace table |
