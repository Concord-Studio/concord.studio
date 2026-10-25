---
title: "Components.try"
description: "Returns true and the ComponentClass if one was registered with the specified name"
slug: api/components/try
sidebar:
  hidden: true
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 2
---

[← Components](/api/components)

Returns true and the ComponentClass if one was registered with the specified name

or false and an error otherwise

```lua
ok = Components.try( name, acceptRejected )
```

### Arguments

| Name | Type | Description |
| --- | --- | --- |
| `name` | string | Name of the ComponentClass to check |
| `acceptRejected` | boolean | Whether to accept names prefixed with the Reject Prefix. |

### Returns

| Name | Type | Description |
| --- | --- | --- |
| `ok` | boolean |  |
| `componentClass` | [ComponentClass](/api/component/component-class)\|string | ComponentClass on success, or an error string on failure |
| `rejected` | string\|boolean | On success: the stripped Component name if the name had the Reject Prefix, otherwise false |
