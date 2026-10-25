---
title: "Tweens"
---

Concord has no tween type. A tween is a Component plus a System, the same as movement: the Component stores the animation, the System ticks it. Do not put `update` on the Component.

## The data

```lua
Concord.Component("tween", function (c, target, field, to, duration)
  c.target = target       -- Component name, e.g. "position"
  c.field = field         -- "x"
  c.from = nil            -- filled on the first tick
  c.to = to
  c.t = 0
  c.duration = duration or 1
end)
```

The values live on some *other* Component (`position.x`). The tween only stores the animation. That is the same split as `velocity` versus `position`.

## The System

```lua
local Tweens = Concord.System("Tweens", {
  tweens = { "tween" }
})

function Tweens:update (dt)
  for _, entity in ipairs(self.tweens) do
    local tw = entity.tween
    local comp = entity[tw.target]
    if not comp then
      entity:remove("tween")
    else
      if tw.from == nil then
        tw.from = comp[tw.field]
      end
      tw.t = math.min(tw.t + dt, tw.duration)
      local u = tw.t / tw.duration
      comp[tw.field] = tw.from + (tw.to - tw.from) * u
      if tw.t >= tw.duration then
        entity:remove("tween")
        self:getWorld():emit("Tweens.finished", entity)
      end
    end
  end
end
```

A method on the class is fine for `tween:progress()`. The tick belongs here: one loop, one Filter, Components stay data.

`Tweens.finished` is a targeted emit so only listeners who asked for it run. A `tweening` flag you remove at the end is the Filter version of the same idea.

## Spawning

An assemblage keeps the call site readable:

```lua
local function withTween (entity, target, field, to, duration)
  entity:give("tween", target, field, to, duration)
end

Cat:assemble(withTween, "position", "x", 200, 0.4)
```

## See also

- [Systems Guide](/guides/systems)
- [Targeted Emits](/guides/targeted-emits)
