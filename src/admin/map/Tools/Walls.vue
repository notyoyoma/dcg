<template>
  <svg style="display:none">
    <symbol id="wallH" viewBox="0 0 15 15">
      <rect width="15px" height="1px" fill="#fff" y="7" />
    </symbol>
    <symbol id="wallV" viewBox="0 0 15 15">
      <rect width="1px" height="15px" fill="#fff" x="7" />
    </symbol>
    <symbol id="doorH" viewBox="0 0 15 15">
      <rect width="6px" height="1px" fill="#fff"       y="7" />
      <rect width="6px" height="1px" fill="#fff" x="9" y="7" />
      <rect width="1px" height="5px" fill="#fff" x="5" y="5" />
      <rect width="1px" height="5px" fill="#fff" x="9" y="5" />
    </symbol>
    <symbol id="doorV" viewBox="0 0 15 15">
      <rect width="1px" height="6px" fill="#fff" x="7" />
      <rect width="1px" height="6px" fill="#fff" x="7" y="9" />
      <rect width="5px" height="1px" fill="#fff" x="5" y="5" />
      <rect width="5px" height="1px" fill="#fff" x="5" y="9" />
    </symbol>
    <symbol id="hiddenDoorH" viewBox="0 0 15 15">
      <rect width="15px" height="1px" fill="#fff" y="7" />
      <rect width="5px" height="3px" fill="#fff" x="5" y="6" />
    </symbol>
    <symbol id="hiddenDoorV" viewBox="0 0 15 15">
      <rect width="1px" height="15px" fill="#fff" x="7" />
      <rect width="3px" height="5px" fill="#fff" x="6" y="5" />
    </symbol>
  </svg>
</template>

<script>
export default {};
export const walls = {
  2: "wallV",
  4: "doorV",
  6: "hiddenDoorV",
};
</script>