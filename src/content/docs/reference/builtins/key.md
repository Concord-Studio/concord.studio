---
title: "Key"
description: "Built-in Component that assigns a unique key to an Entity in its World."
slug: api/builtins/key
sidebar:
  order: 1
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
Key = require('concord.builtins.key')
```

## deserialize

Assigns a key from serialized data.

```lua
key:deserialize( data )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `data` | `string\|number` | Previously serialized key value |

## removed

Callback: Clears the World key when the Component is removed (not replaced).

```lua
key:removed( replaced )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `replaced` | `boolean` | True when the Component is being overwritten |
