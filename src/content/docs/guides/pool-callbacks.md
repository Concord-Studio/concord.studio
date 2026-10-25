---
title: "Pool onAdded / onRemoved"
---

A Pool is a List. Lists can tell you when a member arrives or leaves. That is the cheap way to keep a *second* structure in sync: a spatial hash, a render index, a count on the HUD.

## The hook

```lua
function Physics:init ()
  local hash = spatialhash()
  self.hash = hash

  function self.boxes:onAdded (entity)
    hash:add(entity)
  end

  function self.boxes:onRemoved (entity)
    hash:remove(entity)
  end
end
```

`onAdded` runs when the Filter accepts an Entity. `onRemoved` runs when the Entity no longer matches (or leaves the World). `List:clear` does **not** fire `onRemoved` — if you need teardown on clear, walk the List yourself first.

These callbacks run during a flush. Do not `flush()`, and do not `emit` something that would auto-flush. Mutate your side structure, not the World's queues. [Pool Flushing and Timing](/guides/pool-flushing-and-timing) is the rule.

## Compared to the other callbacks

- This Entity matched or left *this* Filter: `pool:onAdded` / `onRemoved`
- Any Entity entered or left the World: `World:onEntityAdded` / `World:onEntityRemoved`
- This *Component* was torn down: `Component:removed` — [Component:removed Guide](/guides/component-removed)

World-level callbacks see everyone. Pool callbacks see the question your System actually asked (`{"position", "size"}`). Component `removed` is about the data, not membership.

## See also

- [List:onAdded](/api/list/on-added)
- [Sorting Pools](/guides/sorting-pools)
- [Component:removed Guide](/guides/component-removed)
