<template>
  <div class="HealthBar">
    <div class="RemainingHp" :style="remainingStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
  },
  computed: {
    remainingStyle() {
      return {
        width: (this.current / this.max) * 100 + "%",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.HealthBar {
  height: 4px;
  background: #800;
  position: relative;

  .RemainingHp {
    position: absolute;
    left: 0;
    height: 4px;
    background: #080;
  }
}
</style>
