---
title: "Before and After Events"
---

`World:emit` can be wrapped. `beforeEmit` runs before listeners; `afterEmit` runs after. Assign them on the World instance. This is middleware: log, profile, swallow `draw` while paused — not something a gameplay System should need.

## The hooks

```lua
function world:beforeEmit (systemName, eventName, listeners, ...)
  self._t = love.timer.getTime()
end

function world:afterEmit (systemName, eventName, listeners, ...)
  local dt = love.timer.getTime() - self._t
  if dt > 0.002 then
    print(eventName, dt)
  end
end
```

`systemName` is set when the emit was targeted (`"Movement.update"`); otherwise it is `nil`. `eventName` is `update` in both cases. `listeners` is the internal list, or `nil` if nobody registered.

Return a truthy value from `beforeEmit` to skip listeners **and** `afterEmit` for that emit:

```lua
function world:beforeEmit (systemName, eventName)
  if eventName == "draw" and self:getResource("paused") then
    return true
  end
end
```

That is a blunt pause. Prefer `setEnabled` when you only want some Systems quiet; swallow at the World when *nothing* should hear `draw`.

## Nested emits

Emits you fire from inside `beforeEmit` or `afterEmit` do not re-enter the hooks. Concord sets that guard so a logger that emits `"log"` cannot recurse. These hooks wrap every emit, targeted or not.

## See also

- @{World:beforeEmit}
- @{World:afterEmit}
- [Worlds](worlds.md)
