<template>
  <div id="mapContainer">
    <div id="mapLiner">
      <svg
        id="map"
        :width="`600px`"
        :height="`600px`"
        :viewBox="`0 0 600 600`"
        :style="positionMapTransform"
      >
        <defs>
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
        <svg
          :x="location.x * 15"
          :y="location.y * 15"
          viewBox="0 0 15 15"
          width="15px"
          height="15px"
        >
          <g :transform="rotatePartyIndicatorTransform">
            <rect x="5px" y="7px" width="5px" height="6px" fill="#aaf" />
            <polygon points="2,7 13,7 7.5,2" fill="#aaf" />
          </g>
        </svg>
      </svg>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import keymage from "keymage";

import layers from "@/components/map/layers";
import WallDefs from "@/components/map/layers/walls/Defs";
import TileDefs from "@/components/map/layers/genericTile/Defs";

const visibleLayers = ["walls", "floors"];

export default {
  components: { WallDefs, TileDefs },
  data: () => ({
    visibleLayers,
  }),
  computed: {
    ...mapState("map", ["width", "height"]),
    ...mapState("party", ["location", "facing"]),
    positionMapTransform() {
      const transformX = (this.location.x - 20) * -15 - 7;
      const transformY = (this.location.y - 20) * -15 - 7;
      return {
        transform: `translate(${transformX}px, ${transformY}px)`,
      };
    },
    rotatePartyIndicatorTransform() {
      return `rotate(${this.facing * 90} 7.5 7.5)`;
    },
  },
  methods: {
    layer(id) {
      return layers[id];
    },
  },
};
</script>

<style scoped>
#mapContainer {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
}
#mapLiner {
  width: 600px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#map {
  overflow: visible;
}
</style>
