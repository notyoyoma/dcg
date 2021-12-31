test("teleport", () => {
  const pos1 = { x: 1, y: 1, z: 0 };
  game.Party.teleport(pos1);
  expect(game.Party.data.location).toMatchObject(pos1);
});

test("move", () => {
  game.Party.move();
  expect(game.Party.data.location).toMatchObject({ x: 1, y: 2, z: 0 });
});
