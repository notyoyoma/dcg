// prettier-ignore
const alignmentMatches = {
  good: {
    good: -1,      // good characters love other goods
    neutral: 0.5,  // good characters dislike neutrals
    evil: 1,       // good characters loathe evils
  },
  neutral: {
    good: 0.25,    // neutral characters are annoyed by goods
    neutral: -0.5, // neutral characters like other neutrals
    evil: 0.25,    // neutral characters are annoyed by evils
  },
  evil: {
    good: 0.5,     // evil characters dislike goods
    neutral: 0,    // evil characters tolerate neutrals
    evil: -0.5,    // evil characters like other evils
  },
};

export function feelingsToward(a, b) {
  // how does a feel about b?
  const feels = alignmentMatches[a.alignment][b.alignment];
  // adjust for intelligence vs charisma
  const strength =
    (b.stats.charisma || 1) / (a.stats.intelligence || 1) / 10 + 1;
  return Math.max(-1, Math.min(1, Math.round(feels * strength * 100) / 100));
}

export function partyFeelsTowardParty(partyA, partyB) {
  let feels = [];
  for (const a of partyA) {
    for (const b of partyB) {
      feels.push(feelingsToward(a, b));
    }
  }
  // return an average of all the party feels
  const average = feels.reduce((r, i) => r + i) / feels.length;
  return Math.round(average * 100) / 100;
}

export function partyCohesion(party) {
  let feels = [];
  for (const a of party) {
    for (const b of party) {
      if (a === b) continue;
      feels.push((-feelingsToward(a, b) + 1) / 2);
    }
  }
  // return an average of all the party feels towards each other
  const average = feels.reduce((r, i) => r + i) / feels.length;
  return Math.round(average * 100) / 100;
}
