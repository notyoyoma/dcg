import unzip from "lodash/unzip";

export function weightedRoll(arrayOfOptions) {
  const [weights, ids] = unzip(arrayOfOptions);
  const totalWeights = weights.reduce((r, i) => r + i, 0);
  const roll = Math.random() * totalWeights;
  let counter = 0;
  for (const [weight, id] of arrayOfOptions) {
    if (counter + weight > roll) return id;
    counter += weight;
  }
  // if we make it this far, just return the last item
  return ids[ids.length - 1];
}

// TODO rework to a class
const fairnessHistory = {};
export function fairRoll(arrayOfOptions, rollId) {
  // if there are fewer than 5 items, just do the weighted roll.
  if (arrayOfOptions.length < 5) return weightedRoll(arrayOfOptions);
  if (!fairnessHistory[rollId]) fairnessHistory[rollId] = [];
  const previousRolls = fairnessHistory[rollId];
  const filteredOptions = arrayOfOptions.filter(
    (option) => !previousRolls.includes(option.id)
  );
  const rolledId = weightedRoll(filteredOptions);
  previousRolls.push(rolledId);

  // if there are >5 previous roles, remove all but 5
  if (previousRolls.length > 5) {
    previousRolls.splice(0, previousRolls.length - 5);
  }
  return rolledId;
}

export function statsRoll(statsObj, floor) {
  const rollResult = {};
  Object.keys(statsObj).forEach((key) => {
    const baseValue = statsObj[key];
    const halfBase = Math.round(baseValue / 2);
    const statRoll = halfBase + roll(baseValue);
    rollResult[key] = statRoll * Math.max(1, floor);
  });
  return rollResult;
}

// min = 1
export function roll(max) {
  return Math.ceil(max * Math.random());
}

export function randomGausian() {
  return (Math.random() + Math.random() + Math.random()) / 3;
}

// min = 1
export function rollGausian(max) {
  return Math.ceil(randomGausian() * max);
}

export function rollArray(arr) {
  // because arrays are 0 indexed, use Math.floor
  // this returns 0 - (arr.length-1),
  // therefore, randomly picks one of the items of the array
  return arr[Math.floor(Math.random() * arr.length)];
}

export function rollObject(obj) {
  const key = rollArray(Object.keys(obj));
  return obj[key];
}
