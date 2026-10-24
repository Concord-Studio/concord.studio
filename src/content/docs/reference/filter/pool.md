---
title: "Pool"
description: "Entity collection backing a Filter. Default instances are List; custom constructors must implement add, remove, has, and clear."
slug: api/filter/pool
sidebar:
  hidden: true
---

[← Filter](/api/filter)

Entity collection backing a Filter. Default instances are List; custom constructors must implement add, remove, has, and clear.

Default List pools may define `onAdded` / `onRemoved` (see List); `clear` does not invoke `onRemoved`.

#### Fields

| Name | Type | Description |
| --- | --- | --- |
| `onAdded?` | fun(self: [Pool](/api/filter/pool),  e: [Entity](/api/entity#entity)): nil | Optional; List pools support this callback |
| `onRemoved?` | fun(self: [Pool](/api/filter/pool),  e: [Entity](/api/entity#entity)): nil | Optional; List pools support this callback |
