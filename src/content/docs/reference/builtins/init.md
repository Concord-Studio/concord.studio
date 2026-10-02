---
title: "Overview"
description: "All the built-in components."
slug: api/builtins
sidebar:
  order: 0
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
Builtins = require('concord.builtins')
```


## Built-in components

- [Key](/api/builtins/key) — Built-in Component that assigns a unique key to an Entity in its World.
- [Serializable](/api/builtins/serializable) — Built-in marker Component. Entities with this Component are included in World:serialize.
