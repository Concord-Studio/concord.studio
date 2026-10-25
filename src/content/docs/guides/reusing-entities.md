---
title: "Reusing Entities"
---

`Entity:destroy` is not an object pool. After the next flush the Entity is gone. If you spawn a few hundred bullets a second, creating and destroying that often is wasted work: you can keep the Entity and reset its Components.

## When reuse is worth it

Short-lived, high-churn things: bullets, particles, damage numbers. A boss you fight once should just `destroy`.

The idea is a flag that means "this slot is free":

```lua
Concord.Component("inactive")

local function fireBullet (world, x, y, dx, dy)
  local bullet = world:query({ "inactive", "bullet" })[1]
  if bullet then
    bullet:remove("inactive")
  else
    bullet = world:newEntity():give("bullet")
  end

  bullet
    :give("position", x, y)
    :give("velocity", dx, dy)
    :ensure("drawable")
end

function Bullet:update (dt)
  for _, entity in ipairs(self.live) do
    -- ...
    if offscreen(entity) then
      entity:remove("velocity"):give("inactive")
    end
  end
end
```

`live` is `{ "bullet", "position", "!inactive" }`. Free slots are `{ "inactive", "bullet" }`. `ensure` keeps identity Components (`bullet`, maybe `key`) from being rebuilt; `give` resets the values that change every shot.

`World:query` is fine to find one free slot. A dedicated Pool on the System is better if you recycle every frame.

Do not assume `remove("inactive")` puts the bullet in `live` this iteration. Recycle, then wait until the next `update` to iterate `live`, or `give` the Components the current loop already understands. [Pool Flushing and Timing](/guides/pool-flushing-and-timing) is the timing.

Clone a prefab once; reuse the instances you fire. [Cloning an Entity](/guides/cloning-an-entity) creates a new Entity from a snapshot. Reuse keeps the same object and swaps flags.

## See also

- [Entities Guide](/guides/entities)
- [Cloning an Entity](/guides/cloning-an-entity)
