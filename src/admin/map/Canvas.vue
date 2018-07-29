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
    <rect id="interactionHandler" width="100%" height="100%" fill="transparent"
      @mousedown="(e)=>mouseEvent(e, 'mousedown')"
      @mousemove="(e)=>mouseEvent(e, 'mousemove')"
      @mouseup="(e)=>mouseEvent(e, 'mouseup')"
      />
  </svg>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default {
    computed: {
      ...mapState(['currentTool', 'currentLayerKey']),
      ...mapGetters(['currentLayer']),
    },
    methods: {
      mouseEvent(e, eventType) {
        this.currentLayer[eventType](e, this.currentTool)
      }
    }
  }
</script>
