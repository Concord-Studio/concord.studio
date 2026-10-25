---
title: "Entity:assemble"
description: "Assembles an Entity by calling `assemblage(self, ...)` and returning `self`."
slug: api/entity/assemble
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Entity](/api/entity)

Assembles an Entity by calling `assemblage(self, ...)` and returning `self`.

```lua
entity = entity:assemble( assemblage, ... )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `assemblage` | fun(entity: [Entity](/api/entity#entity), ...) | Function that will assemble an entity |
| `...` | any | Additional arguments to pass to the assemblage function. |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `entity` | [Entity](/api/entity#entity) |  |
