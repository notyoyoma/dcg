<template>
  <svg
    :width="svg.width"
    :height="svg.height"
    :viewBox="`0 0 ${svg.boxWidth} ${svg.boxHeight}`"
  >
    <defs>
      <pattern id="grid" width="15" height="15" patternUnits="userSpaceOnUse">
        <path
          d="M 15 0 L 0 0 0 15"
          fill="none"
          stroke="#333"
          stroke-width="1"
        />
      </pattern>
      <WallDefs />
    </defs>
    <g id="background">
      <rect width="100%" height="100%" fill="#000" />
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect
        widht="100%"
        height="100%"
        fill="transparent"
        stroke="#fff"
        stroke-width="1.5px"
      />
    </g>
    <template v-for="key in visibleLayers" :key="`layer-${key}`">
      <component :is="renderLayer(key)" />
    </template>
    <rect
      width="100%"
      height="100%"
      stroke="#fff"
      stroke-width="1px"
      fill="transparent"
    />
    <rect
      id="interactionHandler"
      width="100%"
      height="100%"
      fill="transparent"
      @mousedown="interact"
      @mousemove="interact"
      @mouseup="interact"
    />
  </svg>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
// import keymage from "keymage";

import layers from "./layers";
import WallDefs from "./layers/walls/Defs";

export default {
  components: { WallDefs },
  data: () => ({
    zoom: 15,
  }),
  computed: {
    ...mapState("mapEditor", ["hideLayers"]),
    ...mapState("map", ["width", "height"]),
    svg() {
      return {
        width: this.width * this.zoom,
        height: this.height * this.zoom,
        boxWidth: this.width * 15,
        boxHeight: this.height * 15,
      };
    },
    visibleLayers() {
      return Object.keys(layers).filter(
        (key) => !this.hideLayers.includes(key)
      );
    },
  },
  methods: {
    ...mapMutations("mapEditor", ["setMouseHeldDown"]),
    ...mapActions("mapEditor", ["interact"]),
    renderLayer(key) {
      return layers[key].RenderComponent;
    },
    // changeZoom(event) {
    //   this.zoom = Math.max(
    //     5,
    //     Math.min(50, this.zoom + (event.deltaY < 0 ? 1 : -1))
    //   );
    // },
    mouseDown() {
      this.setMouseHeldDown(true);
    },
    mouseUp() {
      this.setMouseHeldDown(false);
    },
    windowMouseOut(e) {
      e = e ? e : window.event;
      const target = e.relatedTarget || e.toElement;
      if (!target || target.nodeName == "HTML") {
        this.mouseUp();
      }
    },
    // resetZoom() {
    //   this.zoom = 15;
    // },
  },
  mounted() {
    // window.addEventListener("wheel", this.changeZoom);
    window.addEventListener("mousedown", this.mouseDown);
    window.addEventListener("mouseup", this.mouseUp);
    window.addEventListener("mouseout", this.windowMouseOut);
    // keymage("ctrl-0", this.resetZoom);
  },
  beforeUnmount() {
    // window.removeEventListener("wheel", this.changeZoom);
    window.removeEventListener("mousedown", this.mouseDown);
    window.removeEventListener("mouseup", this.mouseUp);
    window.removeEventListener("mouseout", this.windowMouseOut);
    // keymage.unbind("ctrl-0", this.resetZoom);
  },
};
</script>
