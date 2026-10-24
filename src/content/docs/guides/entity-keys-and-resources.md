---
title: "Entity Keys and Resources"
---

Two ways the World holds on to something you will need later: a **key** on an Entity (stable identity) and a **resource** on the World (a shared object that is not an Entity).

## Keys

The builtin `key` Component assigns an Entity a unique key in its World. Use it when something else must find that Entity again: a save file, a network packet, "the player."

```lua
Cat:give("key")           -- World generates a key
print(Cat.key())          -- e.g. "1"

local same = world:getEntityByKey(Cat.key())
```

The Entity must already belong to a World. `give("key")` before `addEntity` will error — the Component asks the World to register it.

You can pass an explicit key when you already have one (loading a save, a server id):

```lua
Cat:give("key", "player-1")
```

`World:getEntityByKey` is the lookup. `World:setKeyGenerator` replaces the default counter if you need UUIDs or a different scheme.

Keys are per World. Destroying the Entity (or removing `key`) frees the key. `World:removeEntity` strips `key` first so that cleanup always runs.

A key is identity, not a gameplay flag. "This is the player" for Filters is still a `player` Component. The key is how a save or a UI that lives *outside* the Pool finds them.

## Resources

`World:setResource` / `World:getResource` store objects that are not Entities: a camera, a physics world, an asset atlas, a pathfinder.

```lua
world:setResource("atlas", love.graphics.newImage("atlas.png"))

function Render:init (world)
  self.atlas = world:getResource("atlas")
end
```

Put it on the World when *several* Systems need it. Put it on `self` in `init` when only that System cares. Making a Game stuffed "the player" in a resource for a tiny slice; a `player` flag plus a Pool is more ECS-like once other Systems also need the player Entity.

Resources are not serialized. If a save must remember the camera, that is a Component on some Entity, or data you write next to `World:serialize`.

## Keys and saves

`World:serialize` includes each Entity's key unless you pass `ignoreKeys`. `World:deserialize` restores them so `getEntityByKey` still works after a load. [Serialization](serialization.md) is the full path.

## See also

- @{key}
- @{World:setResource}
- [Serialization](serialization.md)
