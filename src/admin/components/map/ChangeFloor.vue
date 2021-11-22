<template>
  <div class="ui-change-floor ml-2">
    <KeyPress on="ctrl-up" @hit="changeFloor(1)">
      <div class="btn">&#8963;</div>
    </KeyPress>
    <KeyPress on="ctrl-down" @hit="changeFloor(-1)">
      <div class="btn">&#8963;</div>
    </KeyPress>
  </div>
</template>

<script>
export default {
  methods: {
    changeFloor(delta) {
      this.$store.commit(
        "setFloor",
        Math.max(
          0, // don't go below 0
          Math.min(
            this.$store.state.map.floors.length - 1, // don't go above max floors
            this.$store.state.mapEditor.currentFloorIndex + delta
          )
        )
      ); // adjust by delta;
    },
  },
};
</script>

<style lang="scss">
.ui-change-floor {
  display: flex;
  flex-direction: column;
  .btn {
    font-size: 0.8rem;
    height: 1rem;
    width: 1rem;
    line-height: 1.2rem;
    display: block;
    text-align: center;
    cursor: pointer;
    &:last-child {
      transform: rotate(180deg);
    }
  }
}
</style>
