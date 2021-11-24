<template>
  <span @click="hit"><slot /></span>
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
    toggle() {
      this.show = !this.show;
    },
    hide() {
      this.show = false;
    },
    hit(e) {
      this.$emit("hit", e);
    },
  },
  mounted() {
    keymage(this.on, this.hit);
    keymage("shift-/", this.toggle);
    keymage("esc", this.hide);
  },
  beforeUnmount() {
    keymage.unbind(this.on, this.hit);
    keymage.unbind("shift-/", this.toggle);
    keymage.unbind("esc", this.hide);
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
