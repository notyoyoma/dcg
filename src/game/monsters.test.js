import { MonsterParty } from "./monsters";

test("textSummary", () => {
  const oneTyke = new MonsterParty("tyke", 1);
  oneTyke.party[0].count = 1;
  oneTyke.party[0].alive = 1;
  expect(oneTyke.textSummary).toBe("There is 1 tyke in the room.");

  const twoTykes = new MonsterParty("2tykes", 1);
  twoTykes.party[0].count = 1;
  twoTykes.party[0].alive = 1;
  twoTykes.party[1].count = 1;
  twoTykes.party[1].alive = 1;
  expect(twoTykes.textSummary).toBe("There are 2 tykes in the room.");

  twoTykes.party[1].alive = 0;
  expect(twoTykes.textSummary).toBe(
    "There is 1 tyke and 1 dead monster in the room."
  );
  twoTykes.party[0].alive = 0;
  expect(twoTykes.textSummary).toBe("There are 2 dead monsters in the room.");
});
