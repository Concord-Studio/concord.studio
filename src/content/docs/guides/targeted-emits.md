---
title: "Targeted Emits"
---

If you named the System, you can address it:

```lua
local Movement = Concord.System("Movement", {
  animals = { "terrestrial", "position" }
})

-- ...
world:emit("Movement.update", dt)
```

`"Movement.update"` runs `Movement:update` and nobody else's `update`. The name is the string you passed to `Concord.System("Movement", ...)`. An unnamed System cannot be targeted this way.

Use a targeted emit when a global event would wake Systems that should not care. "The player clicked this Entity" is often `world:emit("Select.select", entity)` rather than a `clicked` flag every Render System has to ignore.

The other way to isolate work is a flag Component plus a Filter. Prefer the Filter when *many* Entities share the behavior. Prefer a targeted emit when the audience is one System.

## Payloads

Extra arguments are the payload:

```lua
world:emit("mousepressed", x, y, button)

function Select:mousepressed (x, y, button)
  -- ...
end
```

Pass `dt`, mouse coordinates, the Entity that was hit. Do not stuff those into a dummy Entity just to make an event look like ECS.

## Emitting from a System

```lua
function Combat:update ()
  -- ...
  self:getWorld():emit("playSound", "hit")
end
```

A nested `emit` runs immediately. Swallowing, logging, or wrapping every emit is not a targeted emit — that is [Before and After Events](/guides/before-and-after-events).

## See also

- [World:emit](/api/world/emit)
- [Worlds Guide](/guides/worlds)
- [Before and After Events](/guides/before-and-after-events)
