const party = game.party;

test("teleport", () => {
  const pos1 = { x: 1, y: 1, z: 0 };
  party.teleport(pos1);
  expect(party.data.location).toMatchObject(pos1);
});
