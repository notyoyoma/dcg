<template>
  <svg width="600" height="600" v-if="currentLayer">
    <defs>
      <pattern id="grid" width="15" height="15" patternUnits="userSpaceOnUse">
        <path d="M 15 0 L 0 0 0 15" fill="none" stroke="#333" stroke-width="1"/>
      </pattern>
    </defs>
    <g id="background">
      <rect width="100%" height="100%" fill="#000" />
      <rect width="100%" height="100%" fill="url(#grid)" />
    </g>
    <g v-for="{key, _isVisible} in layers" v-if="_isVisible">
      <g v-for="(row,y) in currentFloor[key]"
        v-bind:key="`${key}-row-${y}`">
        <use v-for="(tileId,x) in row" width="15px" height="15px"
          v-if="tileId"
          v-bind:x="x*15" v-bind:y="y*15"
          :xlink:href="'#'+tiles[tileId]" />
      </g>
    </g>
    <rect id="interactionHandler" width="100%" height="100%" fill="transparent"
      @mousedown="(e)=>mouseEvent(e, 'mousedown')"
      @mousemove="(e)=>mouseEvent(e, 'mousemove')"
      @mouseup="(e)=>mouseEvent(e, 'mouseup')"
      />
  </svg>
</template>

<script>
  import {mapState, mapGetters} from 'vuex';
  import {tiles} from './Tools/Tiles';
  export default {
    computed: {
      ...mapState(['currentTool', 'currentLayerKey', 'layers']),
      ...mapGetters(['currentLayer', 'currentFloor']),
    },
    data() {return {tiles}},
    methods: {
      mouseEvent(e, eventType) {
        if (this.currentTool) {
          this.currentLayer[eventType](e, this.currentTool)
        }
      }
    },
    updated() {
      console.log('update');
    }
  }
</script>
