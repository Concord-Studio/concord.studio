---
title: "System"
description: "Iterates over Entities. From these Entities it gets Components and modifies them."
slug: api/system
sidebar:
  order: 7
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

## Require

If the `concord` folder is in the root directory of your game, you can import this module like so:

```lua
System = require('concord.system')
```

## new

Creates a new SystemClass.

```lua
system = System.new( name, definition )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the System. If the first argument is not a string, it is treated as the definition. |
| `definition` | `table<string,` | FilterDefinition> A table containing filters (name = {components...}) |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `system` | `SystemClass` |  |
---

```lua
system = System.new( definition )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `definition` | `table<string` | FilterDefinition> A table containing filters (name = {components...}) |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `system` | `SystemClass` |  |

## setEnabled

Sets whether the System is enabled.

```lua
system = system:setEnabled( enable )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `enable` | `boolean` |  |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `system` | `System` |  |

## isEnabled

Returns whether the System is enabled.

```lua
boolean = system:isEnabled()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `boolean` | `boolean` |  |

## getWorld

Returns the World the System is in.

```lua
world = system:getWorld()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` |  |

## init

Callback for system initialization.

```lua
system:init( world )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `world` | `World` | The World the System was added to |

## onEnabled

Callback for when a System is enabled.

```lua
system:onEnabled()
```

## onDisabled

Callback for when a System is disabled.

```lua
system:onDisabled()
```
