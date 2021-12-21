import {
  feelingsToward,
  partyFeelsTowardParty,
  partyCohesion,
} from "./alignment";

const g = "good";
const n = "neutral";
const e = "evil";

const char = (align, intelligence, charisma) => ({
  alignment: align,
  stats: {
    intelligence,
    charisma,
  },
});

// prettier-ignore
test("feelingsToward", () => {
  const bChars = [char(g, 5, 5), char(n, 5, 5), char(e, 5, 5)];

  function testAandBs([a, bs, outs], intVChar) {
    bs.forEach((b, i) => {
      const value = feelingsToward(a, b);
      const aAlign = a.alignment;
      const bAlign = b.alignment;
      const aInt = a.stats.intelligence;
      const bChar = b.stats.charisma;
      const result = `${aAlign}(${aInt}) / ${bAlign}(${bChar}) = ${value}`
      const correct = `${aAlign}(${aInt}) / ${bAlign}(${bChar}) = ${outs[i]}`
      expect(result).toBe(correct)
    })
  }

  const intEQChar = [
    [
      char(g, 5),
      bChars,
      [-1, 0.55, 1]
    ],
    [
      char(n, 5),
      bChars,
      [0.28, -0.55, 0.28]
    ],
    [
      char(e, 5),
      bChars,
      [0.55, 0, -0.55]
    ],
  ];
  intEQChar.forEach(testAandBs);

  const intGTChar = [
    [
      char(g, 10),
      bChars,
      [-1, 0.53, 1]
    ],
    [
      char(n, 10),
      bChars,
      [0.26, -0.52, 0.26]
    ],
    [
      char(e, 10),
      bChars,
      [0.53, 0, -0.52]
    ],
  ];
  intGTChar.forEach(testAandBs);

  const ltChars = [char(g, 6, 6), char(n, 6, 6), char(e, 6, 6)];
  const intLTChar = [
    [
      char(g, 3),
      ltChars,
      [-1, 0.6, 1]
    ],
    [
      char(n, 3),
      ltChars,
      [0.3, -0.6, 0.3]
    ],
    [
      char(e, 3),
      ltChars,
      [0.6, 0, -0.6]
    ],
  ];
  intLTChar.forEach(testAandBs);
});

// prettier-ignore
const allGoodParty = [char(g, 5, 5),char(g, 5, 5),char(g, 5, 5),char(g, 5, 5)];
// prettier-ignore
const allNeutralParty = [char(n, 5, 5),char(n, 5, 5),char(n, 5, 5),char(n, 5, 5)];
// prettier-ignore
const allEvilParty = [char(e, 5, 5),char(e, 5, 5),char(e, 5, 5),char(e, 5, 5)];
const mixedParty = [char(g, 5, 5), char(n, 5, 5), char(e, 5, 5)];

// prettier-ignore
test("partyFeelsTowardParty", () => {
  const oneGoodV2 = partyFeelsTowardParty([char(g, 5)], [char(g, 10, 10), char(g, 10, 10)]);
  expect(`oneGoodV2 ${oneGoodV2}`).toBe(`oneGoodV2 -1`);

  // Good V
  const goodVgood = partyFeelsTowardParty(allGoodParty, allGoodParty);
  expect(`goodVgood ${goodVgood}`).toBe('goodVgood -1');

  const goodVneutral = partyFeelsTowardParty(allGoodParty, allNeutralParty);
  expect(`goodVneutral ${goodVneutral}`).toBe('goodVneutral 0.55');

  const goodVevil = partyFeelsTowardParty(allGoodParty, allEvilParty);
  expect(`goodVevil ${goodVevil}`).toBe('goodVevil 1');

  const goodVmixed = partyFeelsTowardParty(allGoodParty, mixedParty);
  expect(`goodVmixed ${goodVmixed}`).toBe('goodVmixed 0.18');


  // Neutral V
  const neutralVgood = partyFeelsTowardParty(allNeutralParty, allGoodParty);
  expect(`neutralVgood ${neutralVgood}`).toBe('neutralVgood 0.28');

  const neutralVneutral = partyFeelsTowardParty(allNeutralParty, allNeutralParty);
  expect(`neutralVneutral ${neutralVneutral}`).toBe('neutralVneutral -0.55');

  const neutralVevil = partyFeelsTowardParty(allNeutralParty, allEvilParty);
  expect(`neutralVevil ${neutralVevil}`).toBe('neutralVevil 0.28');

  const neutralVmixed = partyFeelsTowardParty(allNeutralParty, mixedParty);
  expect(`neutralVmixed ${neutralVmixed}`).toBe('neutralVmixed 0');


  // Evil V
  const evilVgood = partyFeelsTowardParty(allEvilParty, allGoodParty);
  expect(`evilVgood ${evilVgood}`).toBe('evilVgood 0.55');

  const evilVneutral = partyFeelsTowardParty(allEvilParty, allNeutralParty);
  expect(`evilVneutral ${evilVneutral}`).toBe('evilVneutral 0');

  const evilVevil = partyFeelsTowardParty(allEvilParty, allEvilParty);
  expect(`evilVevil ${evilVevil}`).toBe('evilVevil -0.55');

  const evilVmixed = partyFeelsTowardParty(allEvilParty, mixedParty);
  expect(`evilVmixed ${evilVmixed}`).toBe('evilVmixed 0');


  // Mixed V
  const mixedVgood = partyFeelsTowardParty(mixedParty, allGoodParty);
  expect(`mixedVgood ${mixedVgood}`).toBe('mixedVgood -0.06');

  const mixedVneutral = partyFeelsTowardParty(mixedParty, allNeutralParty);
  expect(`mixedVneutral ${mixedVneutral}`).toBe('mixedVneutral 0');

  const mixedVevil = partyFeelsTowardParty(mixedParty, allEvilParty);
  expect(`mixedVevil ${mixedVevil}`).toBe('mixedVevil 0.24');

  const mixedVmixed = partyFeelsTowardParty(mixedParty, mixedParty);
  expect(`mixedVmixed ${mixedVmixed}`).toBe('mixedVmixed 0.06');
});

test("partyCohesion", () => {
  expect(partyCohesion(allGoodParty)).toBe(1);
  expect(partyCohesion(allNeutralParty)).toBe(0.78);
  expect(partyCohesion(allEvilParty)).toBe(0.78);
  expect(partyCohesion(mixedParty)).toBe(0.28);
});
