---
title: "Tips and Tricks"
---

A handful of habits that make everyday Concord code shorter and harder to get wrong. None of this is required.

## Method chaining

`give`, `ensure`, `remove`, `assemble`, and `destroy` all return the Entity. Spawn in one expression when the recipe is obvious:

```lua
world:newEntity()
  :give("position", 50, 50)
  :give("terrestrial")
```

Stop chaining when a step needs a comment, a branch, or a name you will use again. A local `Cat` you can print is worth more than a clever one-liner.

## Direct field access

Once a Component is given, it is a field:

```lua
print(Cat.position.x, Cat.position.y)

if Cat.terrestrial then
  print("Walks!")
end
```

`Entity:has` and `Entity:get` exist for when the name is in a variable, or when a typo should be an error instead of `nil`. Day-to-day game code uses the field.

`Entity:getComponents` is a shallow copy for inspection. Mutating a Component you got that way still mutates the Entity. It is not a clone.

## Utils

`Utils.shallowCopy` copies keys from one table onto another. Nested tables are shared, not cloned. Concord uses it internally for serialize and for the "copy this class onto the instance" optimization. You may want it when you are writing your own `serialize`. You usually do not want it as a substitute for [Cloning a Component](/guides/cloning-a-component).

`Utils.loadNamespace` belongs to its own article: [Loading Namespaces](/guides/loading-namespaces).

## See also

- [Entities Guide](/guides/entities)
- [Making a game with Concord and LÖVE](/guides/making-a-game)
