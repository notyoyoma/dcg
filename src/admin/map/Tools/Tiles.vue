<template>
  <svg style="display:none">
    <symbol id="stairsUp" viewBox="0 0 15 15">
      <text y="15" x="0" fill="#F00">S</text>
      <path d="M 12 14 L 12 5" fill="none" stroke="#F00" stroke-width="1"/>
      <path d="M 9 4 L 15 4 12 2 Z" fill="#F00"/>
    </symbol>
  </svg>
</template>

<script>
export default {};
export const tiles = {
  1: 'stairsUp',
  2: 'stairsDown',
  3: 'noFloor',
}
</script>
