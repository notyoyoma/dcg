<template lang="pug">
  #sidebar
    h6.d-flex.align-items-center
      | Current Floor: {{ currentFloor }}
      ChangeFloor
    h2 Layers
    #layers.d-flex.flex-column
      Layer(
        v-for="layer in layers"
        :key="layer.id"
        v-bind:layer="layer"
      )
    .tools(v-if="currentLayer.toolComponent")
      h2.mt-3 Tools
      component(v-bind:is="currentLayer.toolComponent")
</template>

<script>
import {mapState} from 'vuex';
import ChangeFloor from '../UI/ChangeFloor';
import Layer from '../UI/Layer';
export default {
  computed: mapState([
    'floors',
    'currentFloor',
    'layers',
    'currentLayer',
  ]),
  components: {
    ChangeFloor,
    Layer
  }
}
</script>
