import { statsRoll, randomGausian, rollBetween } from "./rng";

test("statsRoll", () => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;

  const input = { loot: 10 };
  expect(statsRoll(input, 1)).toMatchObject({ loot: 10 });

  const input2 = { loot: 50 };
  expect(statsRoll(input2, 2)).toMatchObject({ loot: 100 });
});

test("rollBetween", () => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0;
  global.Math = mockMath;

  expect(rollBetween(1, 10)).toBe(1);
  expect(rollBetween(2, 4)).toBe(2);

  mockMath.random = () => 1;

  expect(rollBetween(1, 10)).toBe(10);
  expect(rollBetween(2, 4)).toBe(4);
});
