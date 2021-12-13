test("teleport", () => {
  const pos1 = { x: 1, y: 1, z: 0 };
  game.party.teleport(pos1);
  expect(game.party.data.location).toMatchObject(pos1);
});

test("move", () => {
  game.party.moveForward();
  expect(game.party.data.location).toMatchObject({ x: 1, y: 2, z: 0 });
});
