---
title: "Component:serialize"
description: "Callback for when the Component is serialized as part of an Entity."
slug: api/component/serialize
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Component](/api/component)

Callback for when the Component is serialized as part of an Entity.

```lua
data = component:serialize()
```

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `data` | table\|nil | Serialized data, or nil to omit this Component |
