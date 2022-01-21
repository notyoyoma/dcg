import modules from ".";

const { Party } = modules;

test("teleport", () => {
  const pos1 = { x: 1, y: 1, z: 0 };
  Party.teleport(pos1);
  expect(game.Party.data.location).toMatchObject(pos1);
});

test("move", () => {
  Party.move();
  expect(game.Party.data.location).toMatchObject({ x: 1, y: 2, z: 0 });
});
