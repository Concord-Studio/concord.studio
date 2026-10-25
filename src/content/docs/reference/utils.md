---
title: "Utils"
description: "Helper module for misc operations"
slug: api/utils
sidebar:
  order: 10
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
Utils = require('concord.utils')
```

## Methods

| Method | Description |
| --- | --- |
| [Utils.error](/api/utils/error) | Raises a formatted error. |
| [Utils.shallowCopy](/api/utils/shallow-copy) | Copies keys from orig into target. Existing keys in target are overwritten. |
| [Utils.loadNamespace](/api/utils/load-namespace) | Requires files and stores them in a namespace table. |
