---
title: "Utils.shallowCopy"
description: "Copies keys from orig into target. Existing keys in target are overwritten."
slug: api/utils/shallow-copy
sidebar:
  hidden: true
---

[← Utils](/api/utils)

Copies keys from orig into target. Existing keys in target are overwritten.

```lua
matches = Utils.shallowCopy( orig, target )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `orig` | table | Table to copy from |
| `target` | table | Table to copy into |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `matches` | table | target |
