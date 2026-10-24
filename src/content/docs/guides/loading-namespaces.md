---
title: "Loading Namespaces"
---

Components have to be registered before any Entity can `give` them, and before a save can be deserialized. That registration has to happen at startup, once, for the whole program — there is only one `"position"`. `Utils.loadNamespace` is that setup as a function.

## A table of paths

Works in any Lua. Each path is `require`d; the last segment of the path becomes the key in the namespace table:

```lua
local Components = {}
Concord.utils.loadNamespace({
  "game.components.position",
  "game.components.velocity",
  "game.systems.body",
}, Components)

-- Components.position is whatever that file returned
```

Each file should call `Concord.Component(...)` or `Concord.System(...)` at require time. The return value is optional; you only need the namespace table if you will look Systems up by name.

If you omit the namespace argument, the files are still required. That is enough when all you care about is registration.

## A directory (LÖVE)

Pass a directory path and `Utils.loadNamespace` uses `love.filesystem` to require every `.lua` file in that folder (not recursive):

```lua
Concord.utils.loadNamespace("components")
Concord.utils.loadNamespace("systems", Systems)
```

This form needs LÖVE. In plain Lua, or if you need nested folders, pass a table of paths instead.

## When to load

Load Components before you spawn Entities or deserialize. Load Systems before `addSystem`. Making a Game inlined everything in `main.lua`; once the project has more than a handful of files, a namespace load in `love.load` (or at the top of `main.lua`) is the whole setup.

## See also

- @{Utils.loadNamespace}
- [Serialization](serialization.md)
- [Components](components.md)
