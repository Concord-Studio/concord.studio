---
title: "SerializedWorld"
description: "Payload from `World:serialize`, passed to `World:deserialize`."
slug: api/world/serialized-world
sidebar:
  hidden: true
---

[← World](/api/world)

Payload from `World:serialize`, passed to `World:deserialize`.

`generator` restores key-generator state. Numeric indices are per-entity tables from `Entity:serialize` (see Entity for shape).

#### Fields

| Name | Type | Description |
| --- | --- | --- |
| `generator` | any | Snapshot of the World's key-generator state |
| `[integer]` | table | Serialized Entity data from `Entity:serialize` |
