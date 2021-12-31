import { MonsterParty } from "./Monsters";

test("textSummary", () => {
  const oneJackal = new MonsterParty("jackal", 1);
  oneJackal.party[0].count = 1;
  oneJackal.party[0].alive = 1;
  expect(oneJackal.textSummary).toBe("There is 1 jackal in the room.");

  const twoJackals = new MonsterParty("2jackals", 1);
  twoJackals.party[0].count = 1;
  twoJackals.party[0].alive = 1;
  twoJackals.party[1].count = 1;
  twoJackals.party[1].alive = 1;
  expect(twoJackals.textSummary).toBe("There are 2 jackals in the room.");

  twoJackals.party[1].alive = 0;
  expect(twoJackals.textSummary).toBe(
    "There is 1 jackal and 1 dead monster in the room."
  );
  twoJackals.party[0].alive = 0;
  expect(twoJackals.textSummary).toBe("There are 2 dead monsters in the room.");
});
