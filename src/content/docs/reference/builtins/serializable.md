---
title: "Serializable"
description: "Built-in marker Component. Entities with this Component are included in World:serialize."
slug: api/builtins/serializable
sidebar:
  order: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
Serializable = require('concord.builtins.serializable')
```

## Serializable

The Component itself is not serialized.

Extends [ComponentClass](/api/component/component-class).
## Methods

| Method | Description |
| --- | --- |
| [Serializable:serialize](/api/builtins/serializable/serialize) | Callback: When the Component gets serialized as part of an Entity. |
