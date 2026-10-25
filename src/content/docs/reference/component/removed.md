---
title: "Component:removed"
description: "Callback for when the Component is removed or replaced in an Entity."
slug: api/component/removed
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Component](/api/component)

Callback for when the Component is removed or replaced in an Entity.

```lua
component:removed( replaced )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `replaced` | boolean | True when the Component is being overwritten, false when it is being removed |
