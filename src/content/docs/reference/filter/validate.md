---
title: "Filter.validate"
description: "Validates a Filter Definition to make sure every component is valid."
slug: api/filter/validate
sidebar:
  hidden: true
---

[← Filter](/api/filter)

Validates a Filter Definition to make sure every component is valid.

Also checks that def.constructor is callable when present, unless onComponent is provided.

```lua
Filter.validate( errorLevel, name, def, onComponent )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `errorLevel` | integer | Extra stack level added to error reports |
| `name` | string | Name for the Filter. If omitted, errors refer to a World:query filter. |
| `def` | [FilterDefinition](/api/filter/filter-definition) | Table containing the Filter Definition |
| `onComponent` | fun(component: string,  reject: string\|false) | Called with (component, reject) when a component is valid. reject is the stripped Component name when the entry had the Reject Prefix, otherwise false. |
