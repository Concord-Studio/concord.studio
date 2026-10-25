---
title: "Entity:remove"
description: "Removes a Component from an Entity."
slug: api/entity/remove
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Entity](/api/entity)

Removes a Component from an Entity.

```lua
entity = entity:remove( name )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | Name of the ComponentClass to remove |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `entity` | [Entity](/api/entity#entity) |  |

### See also

- [Component:removed](/api/component/removed)
