---
title: "System:setEnabled"
description: "Sets whether the System is enabled."
slug: api/system/set-enabled
sidebar:
  hidden: true
---

[← System](/api/system)

Sets whether the System is enabled.

Disabled systems do not receive `World:emit` callbacks until re-enabled.

```lua
system = system:setEnabled( enable )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `enable` | boolean |  |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `system` | [System](/api/system#system) |  |

### See also

- [World:emit](/api/world/emit)
