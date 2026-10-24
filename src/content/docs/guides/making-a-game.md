---
title: "Making a game with Concord and LÖVE"
---

A vertical slice: one World, a handful of Components, one System, and a player you can move. The point is the wiring — `love.load`, `love.update`, `love.draw` — not a complete game.

## The loop

LÖVE already has a loop. Concord needs you to forward the parts you care about:

```lua
local Concord = require("concord")

local world

function love.load ()
  world = Concord.World()
  -- add Systems and spawn the player (below)
end

function love.update (dt)
  world:emit("update", dt)
end

function love.draw ()
  world:emit("draw")
end
```

`update` is where simulation happens, `draw` is where you paint, and extra arguments (`dt`) land on the System methods with the same names. Drawing usually should not reshuffle Pools; [Pool Flushing and Timing](pool-flushing-and-timing.md) is that story.

## Components

Three aspects: where the player is, how they move, and that they can be drawn.

```lua
Concord.Component("position", function (c, x, y)
  c.x = x or 0
  c.y = y or 0
end)

Concord.Component("velocity", function (c, dx, dy)
  c.dx = dx or 0
  c.dy = dy or 0
end)

Concord.Component("drawable") -- a flag
```

The player's sprite can wait. A circle is enough to prove the loop.

## Systems

Move everything that has a position and a velocity. Draw everything that has a position and the `drawable` flag. Two Pools, one System — or two Systems if you want to disable movement without hiding the picture. We will keep them together for the slice:

```lua
local Body = Concord.System("Body", {
  movers    = { "position", "velocity" },
  drawables = { "position", "drawable" },
})

function Body:update (dt)
  for _, entity in ipairs(self.movers) do
    entity.position.x = entity.position.x + entity.velocity.dx * dt
    entity.position.y = entity.position.y + entity.velocity.dy * dt
  end
end

function Body:draw ()
  for _, entity in ipairs(self.drawables) do
    love.graphics.circle("fill", entity.position.x, entity.position.y, 12)
  end
end
```

Input is a LÖVE callback, not a Component. Write velocity from `love.keypressed`, or emit your own `"keypressed"` event. Do not poll `love.keyboard` inside `drawable`.

```lua
function love.keypressed (key)
  world:emit("keypressed", key)
end

function Body:keypressed (key)
  local player = self:getWorld():getResource("player")
  if not player then return end

  local speed = 120
  if key == "left"  then player.velocity.dx = -speed end
  if key == "right" then player.velocity.dx =  speed end
  if key == "up"    then player.velocity.dy = -speed end
  if key == "down"  then player.velocity.dy =  speed end
end

function love.keyreleased (key)
  world:emit("keyreleased", key)
end

function Body:keyreleased (key)
  local player = self:getWorld():getResource("player")
  if not player then return end

  if key == "left" or key == "right" then player.velocity.dx = 0 end
  if key == "up"   or key == "down"  then player.velocity.dy = 0 end
end
```

Storing "the player" as a resource is the cheap version of [keys](entity-keys-and-resources.md). A flag Component plus a Pool (`{"player", "velocity"}`) is the ECS version. Either is fine at this scale.

## Spawning

```lua
function love.load ()
  world = Concord.World()
  world:addSystem(Body)

  local player = world:newEntity()
    :give("position", 400, 300)
    :give("velocity", 0, 0)
    :give("drawable")

  world:setResource("player", player)
end
```

Run it. You should get a circle you can nudge with the arrow keys.

## What not to put in the World

The window, the filesystem, a one-off debug overlay, and most menus are not Entities. Keep them in LÖVE (or a UI library) and push a thin event into the World when the simulation must react (`world:emit("paused", true)`).

## See also

- [Worlds](worlds.md)
- [Systems](systems.md)
- [Tips and Tricks](tips-and-tricks.md)
