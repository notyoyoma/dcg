<template lang="pug">
  .ui-change-floor.ml-2
    span.btn(v-on:click="changeFloor(1)") &#8963;
    span.btn(v-on:click="changeFloor(-1)") &#8963;
</template>

<script>
export default {
  methods: {
    changeFloor(delta) {
      this.$store.commit("setFloor",
        Math.max(0, // don't go below 0
          Math.min(this.$store.state.floors.length-1, // don't go above max floors
            this.$store.state.currentFloorIndex + delta))); // adjust by delta;
    }
  }
};
</script>

<style lang="scss">
.ui-change-floor {
  display: flex;
  flex-direction: column;
  span {
    font-size: 0.8rem;
    height: 1rem;
    width: 1rem;
    line-height: 1.2rem;
    display: block;
    text-align:center;
    cursor: pointer;
    &:last-child {
      transform: rotate(180deg);
    }
  }
}
</style>
