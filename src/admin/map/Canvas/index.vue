<template>
  <svg :width="canvasWidth" :height="canvasHeight" v-if="currentLayer">
    <defs>
      <pattern id="grid" width="15" height="15" patternUnits="userSpaceOnUse">
        <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#333" stroke-width="1"/>
      </pattern>
    </defs>
    <g id="background">
      <rect width="100%" height="100%" fill="#000" />
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect widht="100%" height="100%" fill="transparent" stroke="#fff" stroke-width="1.5px" />
    </g>
    <component v-for="layer in visibleLayers"
      :key="layer.id"
      v-bind:is="layer.renderComponent"
      v-bind="layer" />
    <rect width="100%" height="100%" stroke="#fff" stroke-width="1px" fill="transparent" />
    <rect id="interactionHandler" width="100%" height="100%" fill="transparent"
      @mousedown="(e)=>mouseEvent(e, 'mousedown')"
      @mousemove="(e)=>mouseEvent(e, 'mousemove')"
      @mouseup="(e)=>mouseEvent(e, 'mouseup')"
      />
  </svg>
</template>

<script>
import {mapState, mapGetters} from "vuex";
import {mapSettings} from "../../../game/world/mapSettings";
export default {
  data() {return{
    canvasWidth: mapSettings.width * mapSettings.tileSize,
    canvasHeight: mapSettings.height * mapSettings.tileSize
  };},
  computed: {
    ...mapState(["currentTool", "layers"]),
    ...mapGetters(["currentLayer"]),
    visibleLayers() {return _.filter(this.layers, "_isVisible");}
  },
  methods: {
    mouseEvent(e, eventType) {
      if (!_.isUndefined(this.currentTool)) {
        this.currentLayer[eventType](e, this.currentTool);
      }
    }
  },
};
</script>
