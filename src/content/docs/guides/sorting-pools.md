---
title: "Sorting Pools"
---

By default a Pool is a List: fast add, remove, lookup, and iteration. It does **not** keep insertion order. Removing an Entity swap-pops the last member into the hole, so "who was added first" is not a thing you can rely on.

When you care about order — painters back-to-front, combat initiative, y-sort — you sort explicitly.

## Sort when you draw

`List:sort` is `table.sort` plus a rebuild of the List's reverse map:

```lua
function Render:draw ()
  self.drawables:sort(function (a, b)
    return a.position.y < b.position.y
  end)

  for _, entity in ipairs(self.drawables) do
    -- ...
  end
end
```

Do this when the order can change every frame and the Pool is not huge. Sorting every `update` of a thousand-Entity list is the expensive version of the same idea.

## Sort less often

If Entities only need to be ordered when they *join* the Pool, hook `onAdded` and insert into a side structure you keep sorted. [Pool onAdded / onRemoved](pool-callbacks.md) is that pattern.

## What not to do

Do not assume `ipairs(pool)` is spawn order. Do not put a `flush` or an `emit` that flushes inside `onAdded`. Sorting the List itself during `onAdded` is possible (it is just `table.sort`).

## See also

- @{List:sort}
- [Pool onAdded / onRemoved](pool-callbacks.md)
