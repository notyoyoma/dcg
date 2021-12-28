import { statsRoll, randomGausian } from "./rng";

const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

test("statsRoll", () => {
  const input = { loot: 10 };
  expect(statsRoll(input, 1)).toMatchObject({ loot: 10 });

  const input2 = { loot: 50 };
  expect(statsRoll(input2, 2)).toMatchObject({ loot: 100 });
});
