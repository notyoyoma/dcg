<template>
  <div class="ui-change-floor ml-2">
    <KeyPress on="ctrl-up" @hit="changeFloor(-1)">
      <div class="btn">
        <i-fa icon="arrow-up" />
      </div>
    </KeyPress>
    <KeyPress on="ctrl-down" @hit="changeFloor(1)">
      <div class="btn">
        <i-fa icon="arrow-down" />
      </div>
    </KeyPress>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("mapEditor", ["currentFloorIndex"]),
    ...mapState("map", { floorCount: (state) => state.floors.length }),
  },
  methods: {
    ...mapMutations("mapEditor", ["setFloor"]),
    ...mapActions("mapEditor", ["addFloor"]),
    changeFloor(delta) {
      const newFloorIndex = Math.max(0, this.currentFloorIndex + delta);
      if (newFloorIndex >= this.floorCount) this.addFloor();
      this.setFloor(newFloorIndex);
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
    cursor: pointer;
    text-align: center;

    &:hover {
      background: #555;
    }
  }
}
</style>
