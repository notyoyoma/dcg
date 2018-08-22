<template>
  <svg style="display:none">
    <symbol id="eraser" viewBox="0 0 15 15">
      <i-fa icon="eraser" />
    </symbol>
    <symbol id="add" viewBox="0 0 15 15">
      <i-fa icon="plus" />
    </symbol>
    <symbol id="edit" viewBox="0 0 15 15">
      <i-fa icon="pen" />
    </symbol>
    <symbol id="select" viewBox="0 0 15 15">
      <i-fa icon="mouse-pointer" />
    </symbol>
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
    <symbol id="pitTrap" viewBox="0 0 15 15">
      <rect x="0.5" y="0.5" width="14px" height="14px" stroke="#fff" />
      <rect x="7" y="-2px" width="1px" height="19px" fill="#fff" transform="rotate(45, 7.5, 7.52)" />
      <rect x="7" y="-2px" width="1px" height="19px" fill="#fff" transform="rotate(-45, 7.5, 7.52)" />
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
export const floorTiles = {
  1: "stairsUp",
  2: "stairsDown",
  3: "noFloor",
  4: "pitTrap",
};
export const effectTiles = {
  1: "fog",
  2: "puddle",
  3: "light0",
  4: "light1",
  5: "light2",
  6: "light3",
  7: "light4",
  8: "light5",
};
</script>
