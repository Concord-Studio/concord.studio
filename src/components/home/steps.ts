export const steps = [
	{
		title: "World",
		description: "In Concord you start with an empty World.",
		summary: "An empty world.",
		code: "local world = Concord.World()",
	},
	{
		title: "Components",
		description:
			"You first define the shapes of the characteristics that exist in the World by defining Components.",
		summary: "position is a component shape with x and y.",
		code: `Concord.Component("position", function (component, x, y)
  component.x = x
  component.y = y
end)`,
	},
	{
		title: "Entities",
		description: "Your World can have any number of Entities.",
		summary: "The world contains Cat and Rock.",
		code: `local Cat = world:newEntity()
local Rock = world:newEntity()`,
	},
	{
		title: "Give",
		description:
			"The characteristics that we previously defined can be given to Entities.",
		summary: "Cat has position 50, 50. Rock has nothing.",
		code: `Cat:give("position", 50, 50)`,
	},
	{
		title: "Systems",
		description:
			"Finally there are Systems. These define filters that allow them to have a subset of all Entities.",
		summary: "Movement is attached to the world. Its movers box keeps entities with position: Cat, not Rock.",
		code: `local Movement = Concord.System("Movement", {movers = { "position" }})

world:addSystem(Movement)`,
	},
	{
		title: "Events",
		description:
			"Systems can also listen to events and iterate over those filtered lists.",
		summary: "Movement listens for the move event.",
		code: `function Movement:move ()
  for i, entity in ipairs(self.movers) do
    entity.position.x = entity.position.x + 5
  end
end`,
	},
	{
		title: "Emit",
		description: "You fire those events from the World using emit.",
		summary: "emit sends move into Movement, and move walks movers. Cat is now at 55, 50.",
		code: `world:emit("move")`,
	},
] as const;
