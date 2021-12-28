import { MonsterParty } from "./monsters";

test("textSummary", () => {
  const oneJakal = new MonsterParty("jakal", 1);
  oneJakal.party[0].count = 1;
  oneJakal.party[0].alive = 1;
  expect(oneJakal.textSummary).toBe("There is 1 jakal in the room.");

  const twoJakals = new MonsterParty("2jakals", 1);
  twoJakals.party[0].count = 1;
  twoJakals.party[0].alive = 1;
  twoJakals.party[1].count = 1;
  twoJakals.party[1].alive = 1;
  expect(twoJakals.textSummary).toBe("There are 2 jakals in the room.");

  twoJakals.party[1].alive = 0;
  expect(twoJakals.textSummary).toBe(
    "There is 1 jakal and 1 dead monster in the room."
  );
  twoJakals.party[0].alive = 0;
  expect(twoJakals.textSummary).toBe("There are 2 dead monsters in the room.");
});
