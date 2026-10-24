---
title: "Entity:destroy"
description: "Destroys the Entity."
slug: api/entity/destroy
sidebar:
  hidden: true
---

[← Entity](/api/entity)

Destroys the Entity.

Queues removal from its World if it's in one. The Entity stays in the World until the next flush.

```lua
entity:destroy()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
|  | [Entity](/api/entity#entity) |  |
