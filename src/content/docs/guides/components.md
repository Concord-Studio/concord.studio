---
title: "Components"
---

A Component describes one aspect of something in your game. For example, one Component can store where something is, another whether it can walk, and another how much health it has.

Instead of creating one large object that tries to describe everything at once, you combine small Components, each responsible for a single aspect.

```lua
Concord.Component("position", function (component, x, y)
  component.x = x or 0
  component.y = y or 0
end)
```

That is why Components exist. A Cat does not need to inherit from an Animal class just to describe where it is — it can simply have a position Component. A Camera can use that same position shape without sharing any inheritance with the Cat.

This keeps composition simple and flexible: Components describe data, not behavior. The position Component stores where something is; it does not contain the game logic for moving it.

Reach for a Component whenever you want to describe *one aspect* of something, rather than trying to define the whole thing at once.

## The populate function

The second argument to `Concord.Component` is the **populate** function. Components start as empty tables. Populate runs once, right after that table is created, and fills it in:

```lua
Concord.Component("position", function (component, x, y)
  component.x = x or 0
  component.y = y or 0
end)
```

`component` is the empty table. `x` and `y` are the extra values you pass when you attach the Component. Whatever fields populate sets are the data you get back later.

It looks like a constructor, but it is a narrower tool than that: populate can only see the arguments it is given and the table it is filling in. That is normally all you need.

A habit worth building early: give arguments a default with `or`, the way `x = x or 0` does above. Then attaching `position` with no values still works, and callers only pass what actually differs from the default.

## Flag Components

Sometimes the interesting fact is presence, not values. Getting Started's `terrestrial` is that kind of Component:

```lua
Concord.Component("terrestrial")
```

There is no populate function, and no data — something either has `terrestrial` or it does not.

That is the reason to prefer a flag over the alternatives you might reach for:

- a string field (`kind = "player"`) — you still have to remember and spell that string correctly everywhere you check it, but now it is coupled to whatever else lives on the same Component, and a typo silently fails to match
- a boolean tucked onto an unrelated Component (`position.isPlayer`) — now "is this the player" is coupled to whether that something happens to have a `position` at all, which has nothing to do with what "player" actually means

A flag does not have that coupling problem. It is just a name that is either present or not.

Attaching a flag looks like attaching any other Component, just without extra values.

## Names are global

When you call `Concord.Component("position", ...)`, that name is registered on Concord itself.

There is exactly one `"position"` in your whole program. You cannot register `"position"` twice — Concord errors instead of quietly letting the second one win.

This is a deliberate design decision, not a limitation to work around: one name always means one definition. If two pieces of code both work with `position`, they are guaranteed to be talking about the same shape of data, even if they never coordinated. That is what makes it safe to split Components across files as your game grows — requiring `components/position.lua` from anywhere always hands you back the same registered Component.

## Adding methods

`Concord.Component` returns the Component class, and methods you put on that class are available on every instance:

```lua
local Position = Concord.Component("position", function (component, x, y)
  component.x = x or 0
  component.y = y or 0
end)

function Position:translate (dx, dy)
  self.x = self.x + dx
  self.y = self.y + dy
end
```

A method should only act on the Component it belongs to. `translate` only ever touches `self.x` and `self.y`. It should not reach into other Components, and it should not become game logic — "walk five pixels when we hear `move`" is no longer about this data.

## Do's and Don'ts

- **Do** give each Component one job. `position` is where something is. `terrestrial` is that it walks. Do not pile unrelated fields onto whichever Component you happen to be editing.
- **Do** keep populate small: assign fields, apply defaults, stop.
- **Don't** put game logic on the Component. A method that only moves `self` is fine. A method that decides *when* to walk is not.
- **Don't** encode identity as a string or a boolean on some other Component. If the interesting fact is presence, use a flag.
- **Don't** register the same name twice. Split by aspect (`position`, `velocity`), not by level or scene.

## See also

- @{Component} — API
- [Entities](entities.md) — attaching, replacing, and removing Components
