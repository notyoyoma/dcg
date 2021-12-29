import unzip from "lodash/unzip";
import { getLSD, setLSD } from "./localStorage";
import { objectReduce } from "./object";

/**
 * @param  {[[weight: number, id: string]]} arrayOfOptions
 * @example
 * // returns "a" twice as often as "b"
 * weightedRoll([[2, "a"], [1, "b"]])
 * @returns {string} id of random item from the array
 */
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

export class FairRoll {
  id = "";
  history = [];
  maxHistory = 5;

  /**
   * @param  {string} rollId The ID used to store/retrieve localStorage data
   */
  constructor(rollId) {
    this.id = `FairRoll.${rollId}`;
    this.history = getLSD(this.id) || [];
  }

  /**
   * @param  {[[weight: number, id: string]]} options
   */
  roll(options) {
    // update maxHistory in case the array changed since last roll
    this.maxHistory = options.length / 3;

    // if there are fewer than 5 items, just do the weighted roll.
    if (options.length < 5) return weightedRoll(options);

    // filter options by history
    const filteredOptions = options.filter(
      ([_, id]) => !this.history.includes(id) // eslint-disable-line
    );
    const rolledId = weightedRoll(filteredOptions);
    this.updateHistory(rolledId);
    return rolledId;
  }

  updateHistory(id) {
    this.history.push(id);
    if (this.history.length > this.maxHistory) {
      this.history.splice(0, this.history.length - this.maxHistory);
    }
    setLSD(this.id, this.history);
  }
}

export function statsRoll(statsObj, floor) {
  const roll = randomGausian();
  return objectReduce(
    statsObj,
    (result, value, key) => {
      const statValue = value / 2 + value * roll;
      result[key] = Math.round(statValue * Math.max(1, floor));
      return result;
    },
    {}
  );
}

// min = 1
export function roll(max) {
  return Math.ceil(max * Math.random());
}

export function rollBetween(min, max) {
  return Math.round(Math.random() * (max - min) + min);
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
