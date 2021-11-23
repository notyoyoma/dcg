<template>
  <div
    class="ui-layer d-flex align-items-center w-100"
    :class="{ active: layerKey == currentLayerKey }"
  >
    <div
      class="layer__visibility flex-no-grow mr-2 btn"
      @click="toggleVisible(layerKey)"
    >
      <i-fa icon="eye" v-if="layerIsVisible(layerKey)"></i-fa>
      <i-fa icon="eye-slash" v-else></i-fa>
    </div>
    <div class="layer__title flex-grow">{{ layerName }}</div>
    <div
      class="layer__menu flex-no-grow ml-2 btn"
      v-if="menuComponent"
      @click="toggleMenu"
    >
      <i-fa icon="cog"></i-fa>
      <component :is="menuComponent" v-if="menuComponent"></component>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  props: ["layerKey", "menuComponent"],
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    ...mapState("mapEditor", ["currentLayerKey"]),
    ...mapGetters("mapEditor", ["layerIsVisible"]),
    layerName() {
      return this.layerKey.charAt(0).toUpperCase() + this.layerKey.slice(1);
    },
  },
  methods: {
    ...mapActions("mapEditor", ["toggleVisible"]),
    toggleMenu(e) {
      e.stopPropagation();
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        document.addEventListener("click", this.toggleMenu);
      } else {
        document.removeEventListener("click", this.toggleMenu);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-layer {
  background: #444;
  border-radius: 5px;
  cursor: pointer;
  padding: 2px;

  &.active {
    box-shadow: inset 0 0 0 2px #777;
  }
  &:hover {
    background: #555;
  }
  + .ui-layer {
    margin-top: 3px;
  }
  .btn {
    padding: 0 0.25rem;
    border-radius: 0;
    &:first-child {
      border-radius: 4px 0 0 4px;
    }
    &:last-child {
      border-radius: 0 4px 4px 0;
    }
  }
  .layer__menu {
    position: relative;
  }
  .menu {
    position: absolute;
    right: 0;
    top: 90%;
  }
}
</style>
