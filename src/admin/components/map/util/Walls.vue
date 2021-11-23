<template>
  <svg style="display: none">
    <symbol id="wall" viewBox="0 0 15 15">
      <rect width="1px" height="15px" fill="#fff" x="7" />
    </symbol>
    <symbol id="door" viewBox="0 0 15 15">
      <rect width="1px" height="6px" fill="#fff" x="7" />
      <rect width="1px" height="6px" fill="#fff" x="7" y="9" />
      <rect width="5px" height="1px" fill="#fff" x="5" y="5" />
      <rect width="5px" height="1px" fill="#fff" x="5" y="9" />
    </symbol>
    <symbol id="hiddenDoor" viewBox="0 0 15 15">
      <rect width="1px" height="15px" fill="#fff" x="7" />
      <rect width="3px" height="5px" fill="#fff" x="6" y="5" />
    </symbol>
  </svg>
</template>

<script>
export default {};
export const walls = {
  1: "wall",
  2: "door",
  3: "hiddenDoor",
};
</script>
