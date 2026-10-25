---
title: "Entity:destroy"
description: "Destroys the Entity."
slug: api/entity/destroy
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Entity](/api/entity)

Destroys the Entity.

Queues removal from its World if it's in one. The Entity stays in the World until the next flush.

```lua
entity = entity:destroy()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `entity` | [Entity](/api/entity#entity) |  |
