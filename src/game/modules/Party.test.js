import { party } from ".";

test("teleport", () => {
  const pos1 = { x: 1, y: 1, z: 0 };
  party.teleport(pos1);
  expect(party.data.location).toMatchObject(pos1);
});

test("move", () => {
  party.move();
  expect(party.data.location).toMatchObject({ x: 1, y: 2, z: 0 });
});
