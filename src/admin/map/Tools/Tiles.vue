<template>
  <svg style="display:none">
    <symbol id="stairsUp" viewBox="0 0 15 15">
      <text y="15" x="0" fill="#F00">S</text>
      <path d="M 12 14 L 12 5" fill="none" stroke="#F00" stroke-width="1"/>
      <path d="M 9 5 L 15 5 12 1 Z" fill="#F00"/>
    </symbol>
    <symbol id="stairsDown" viewBox="0 0 15 15">
      <text y="15" x="0" fill="#F00">S</text>
      <path d="M 12 10 L 12 1" fill="none" stroke="#F00" stroke-width="1"/>
      <path d="M 9 10 L 15 10 12 14 Z" fill="#F00"/>
    </symbol>
    <symbol id="noFloor" viewBox="0 0 15 15">
      <text y="15" x="0" fill="#F00">N</text>
    </symbol>
    <symbol id="fog" viewBox="0 0 15 15">
      <rect width="15px" height="15px" fill="#aaa" />
    </symbol>
    <symbol id="puddle" viewBox="0 0 15 15">
      <rect width="15px" height="15px" fill="#88f" />
    </symbol>
    <symbol id="light0" viewBox="0 0 15 15">
      <rect width="3px" height="3px" fill="#555" />
    </symbol>
    <symbol id="light1" viewBox="0 0 15 15">
      <rect width="3px" height="3px" fill="#777" />
    </symbol>
    <symbol id="light2" viewBox="0 0 15 15">
      <rect width="3px" height="3px" fill="#999" />
    </symbol>
    <symbol id="light3" viewBox="0 0 15 15">
      <rect width="3px" height="3px" fill="#aaa" />
    </symbol>
    <symbol id="light4" viewBox="0 0 15 15">
      <rect width="3px" height="3px" fill="#ccc" />
    </symbol>
    <symbol id="light5" viewBox="0 0 15 15">
      <rect width="3px" height="3px" fill="#eee" />
    </symbol>
  </svg>
</template>

<script>
export default {};
export const tiles = {
  1: "stairsUp",
  2: "stairsDown",
  3: "noFloor",
  4: "fog",
  5: "puddle",
  6: "light0",
  7: "light1",
  8: "light2",
  9: "light3",
  10: "light4",
  11: "light5",
};
export const floorTiles = _.pick(tiles, [1,2,3]);
export const effectTiles = _.pick(tiles, [4,5,6,7,8,9,10,11]);
</script>
