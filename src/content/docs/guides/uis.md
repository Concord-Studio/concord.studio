---
title: "UIs"
---

Most UI is a poor fit for the simulation World. Menus, IMGUI debug panels, a pause overlay, the window itself — keep those in LÖVE (or a UI library) and push a thin event when the game must react.

## Outside the World

```lua
function PauseMenu:draw ()
  -- SUIT / IMGUI / your own rects. Not a Concord System.
end

function love.keypressed (key)
  if key == "escape" then
    paused = not paused
    world:emit("paused", paused)
  end
end

function Body:paused (isPaused)
  self:setEnabled(not isPaused)
end
```

The menu does not need a Filter. The World only needs to know "simulation is paused." `setEnabled` on the sim Systems is usually enough; you can keep a Hud System enabled so the overlay still draws.

Input follows the same direction: LÖVE callbacks → `World:emit` (`"mousepressed"`, `"textinput"`). Do not poll `love.mouse` from every widget Component.

## When UI is Entities

World-space health bars, floating damage numbers, inventory slots that *are* items in the World — those want Filters.

Two layouts:

- **Same World, a flag.** `{"widget", "position"}` versus `{"widget", "!worldspace"}`. Cheap, and the HUD can read `health` directly.
- **A second World.** Isolation is the feature; sharing "the player" then goes through a [resource](/guides/entity-keys-and-resources) or a key you copy in.

Prefer enable/disable on a `Hud` System over destroying widgets every time the menu closes.

If you are writing a UI library on top of Concord, `beforeEmit` / `afterEmit` can wrap layout and input. See [Before and After Events](/guides/before-and-after-events).

## See also

- [Worlds Guide](/guides/worlds)
- [Making a game with Concord and LÖVE](/guides/making-a-game)
