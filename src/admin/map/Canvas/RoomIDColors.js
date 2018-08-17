import idRandomMap from "./idRandomMap.json";

const colors = 1600;
const variations = {
  hue: 30, // not used right now.
  sat: 24, // <- Play around
  lit: 24, // <- Play around
};
const bounds = {
  hue: [0,360],
  sat: [40,100], // <- Play Around
  lit: [25,75], // <- Play Around
};
const hueSatOffset = 0; // <- Play Around

function prctBtw(i, key) {
  if (key == 'hue') {
    return i / colors;
  } else {
    return (i % variations[key]) / variations[key];
  }
}

function interpolate(key, prctBtw) {
  const [min, max] = bounds[key];
  return min + ((max - min) * prctBtw);
}

function color(i) {
  const hue = interpolate('hue',
    prctBtw(i, 'hue'));
  const sat = interpolate('sat',
    prctBtw(i, 'sat'));
  const lit = interpolate('lit',
    prctBtw(i+hueSatOffset, 'lit'));
  return `hsl(${hue}, ${sat}%, ${lit}%)`
}

// used when computing new IDs for room objects
export const roomIDs = _.range(1,colors);
const interlacedIds = _.compact(_.flatten(_.zip(..._.chunk(roomIDs, variations.hue))));
const colorMap = _.reduce(interlacedIds, (r,id,i)=>({...r, [i]:color(id)}), {});

export default colorMap;
