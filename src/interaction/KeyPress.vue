<template>
  <slot @click="hit" />
  <span class="keypress" :data-on="on" :class="{ show: show }"></span>
</template>

<script>
import keymage from "keymage";

export default {
  props: { on: String },
  emits: ["hit"],
  data: () => ({
    show: false,
  }),
  methods: {
    showHide(force) {
      if (force === undefined) {
        this.show = !this.show;
      } else {
        this.show = force;
      }
    },
    hit() {
      this.$emit("hit");
    },
  },
  mounted() {
    keymage(this.on, this.hit);
    keymage("shift-/", this.showHide);
    keymage("esc", () => this.showHide(false));
  },
  beforeUnmount() {
    keymage.unbind(this.on, this.hit);
    keymage.unbind("shift-/", this.showHide);
  },
};
</script>

<style lang="scss">
.keypress {
  position: relative;
  z-index: 999;

  &:before {
    background: #fff;
    color: #55a;
    display: inline-block;
    padding: 2px;
    border: 1px solid #55a;
    border-radius: 2px;
    font-size: 12px;
    line-height: 0.8;
    content: attr(data-on);
    position: absolute;
    display: none;
    white-space: nowrap;
    box-shadow: 0 1px 0px 1px rgba(255, 255, 255, 0.5);
  }

  &.show:before {
    display: inline-block;
  }
}
</style>
