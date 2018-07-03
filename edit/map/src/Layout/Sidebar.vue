<template lang="pug">
  #sidebar
    h6.d-flex.align-items-center
      | Current Floor: {{ floor }}
      ChangeFloor
    h2 Layers
    Layers
    .tools(v-if="toolComponent")
      h2 Tools
      component v-bind:is=toolComponent
</template>

<script>
import ChangeFloor from '../UI/ChangeFloor';
import Layers from '../UI/Layers';
export default {
  data (){
    return {
      floor: 0,
      activeLayer: this.$activeLayer.toolComponent,
    }
  },
  components: {
    ChangeFloor,
    Layers
  }
}
</script>
