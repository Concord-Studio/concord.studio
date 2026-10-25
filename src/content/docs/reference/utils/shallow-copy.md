---
title: "Utils.shallowCopy"
description: "Copies keys from orig into target. Existing keys in target are overwritten."
slug: api/utils/shallow-copy
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Utils](/api/utils)

Copies keys from orig into target. Existing keys in target are overwritten.

```lua
target = Utils.shallowCopy( orig, target )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `orig` | table | Table to copy from |
| `target` | table | Table to copy into |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `target` | table |  |
