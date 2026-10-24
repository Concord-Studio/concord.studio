---
title: "Component:removed"
---

When a Component owns something that is not a Lua table — a Box2D body, a LÖVE Canvas, a handle in another library — someone has to destroy it. That someone is `Component:removed`, not a System that might miss the frame.

## When it runs

```lua
function Body:removed (replaced)
  if self.fixture then
    self.fixture:destroy()
    self.fixture = nil
  end
end
```

`removed` is called when:

- `Entity:remove` takes the Component off (`replaced == false`)
- `Entity:give` overwrites it (`replaced == true`)

`replaced` is how you tell "this Body is gone" from "this Body was replaced by a new one, tear the old fixture down." The builtin `key` uses that split: it only clears the World's key table when the Component is truly gone, not when you assign a new key value.

## What it is not

`removed` is Component teardown. It is not "this Entity left a Pool" — that is [Pool onAdded / onRemoved](pool-callbacks.md). It is not "this Entity left the World" — that is `World:onEntityRemoved`.

If you `destroy` an Entity, Concord removes `key` first so `key:removed(false)` still runs. Other Components are not automatically `remove`d one by one; if they own resources, either `remove` them yourself before `destroy`, or tear those resources down from `onEntityRemoved`.

## See also

- @{Component:removed}
- @{key}
- [Pool onAdded / onRemoved](pool-callbacks.md)
