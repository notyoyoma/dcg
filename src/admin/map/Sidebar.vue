<template lang="pug">
  #sidebar
    .actions.d-flex
      a.btn(href="/admin"): i-fa(icon="arrow-left")
      a.btn(href='#saveChanges'): i-fa(icon="save")
      a.btn(href='/admin/map'): i-fa(icon="sync-alt")
    .p-3(v-if="floors && layers")
      h6.d-flex.align-items-center
        | Current Floor: {{ currentFloor }}
        ChangeFloor
      h2 Layers
      #layers.d-flex.flex-column
        Layer(
          v-for="(layer, index) in layers.layers"
          :key="layer.id"
          v-bind:layer="layer"
          v-bind:index="index"
        )
      .tools(v-if="currentLayerToolComponent")
        h2.mt-3 Tools
        component(v-bind:is="currentLayerToolComponent")
</template>

<script>
import {mapState} from 'vuex';
import ChangeFloor from './UI/ChangeFloor';
import Layer from './UI/Layer';
export default {
  computed: {
    ...mapState([
      'floors',
      'currentFloor',
      'layers',
      'currentLayer',
    ]),
    currentLayerToolComponent() {
      if (_.isEmpty(this.layers)) return false;
      return this.layers[this.currentLayerIndex].toolComponent;
    }
  },
  components: {
    ChangeFloor,
    Layer
  },
}
</script>

<style lang="scss">
#sidebar {
  background: #333;
  color: #fff;

  .actions a {
    flex: 1;
    text-align: center;
  }
}
</style>
