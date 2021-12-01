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
      <symbol id="eraser" viewBox="0 0 15 15">
        <i-fa icon="eraser" />
      </symbol>
      <symbol id="add" viewBox="0 0 15 15">
        <i-fa icon="plus" />
      </symbol>
      <symbol id="edit" viewBox="0 0 15 15">
        <i-fa icon="pen" />
      </symbol>
      <symbol id="select" viewBox="0 0 15 15">
        <i-fa icon="mouse-pointer" />
      </symbol>
      <WallDefs />
      <TileDefs />
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
    <template v-for="id in visibleLayers" :key="`layer-${id}`">
      <component
        :is="layer(id).RenderComponent"
        :id="id"
        :tools="layer(id).tools"
      />
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

import layers, { renderOrder } from "./layers";
import WallDefs from "./layers/walls/Defs";
import TileDefs from "./layers/genericTile/Defs";

export default {
  components: { WallDefs, TileDefs },
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
      return renderOrder.filter((id) => !this.hideLayers.includes(id));
    },
  },
  methods: {
    ...mapMutations("mapEditor", ["setMouseHeldDown"]),
    ...mapActions("mapEditor", ["interact"]),
    layer(id) {
      return layers[id];
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
