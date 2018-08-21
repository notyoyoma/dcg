<template lang="pug">
  #sidebar
    .actions.d-flex
      a.btn(href="/admin"): i-fa(icon="arrow-left")
      a.btn(@click="save()")
        i-fa(icon="save")
      a.btn(href="/admin/map"): i-fa(icon="sync-alt")
    .p-3(v-if="shouldRenderLayersAndTools()")
      h6.d-flex.align-items-center
        | Current Floor: {{ currentFloorIndex + 1 }}
        ChangeFloor
      h2 Layers
      #layers.d-flex.flex-column
        Layer(
          v-for="(layer, index) in layers"
          :key="layer.id"
          v-bind:layer="layer"
          v-bind:index="index"
        )
      .tools(v-if="toolComponent")
        h2.mt-3 Tools
        component(v-bind:is="toolComponent" v-bind:key="currentLayerKey + '-tools'" :tiles="toolTiles")
</template>

<script>
import {mapState} from "vuex";
import ChangeFloor from "./UI/ChangeFloor";
import Layer from "./UI/Layer";
import axios from 'axios';
export default {
  computed: {
    ...mapState([
      "floors",
      "layers",
      "currentFloorIndex",
      "currentLayerKey",
    ]),
    ...mapState({
      currentLayer: state => _.find(state.layers, {id: state.currentLayerKey}),
      toolComponent() {return this.currentLayer.toolComponent;},
      toolTiles() {return this.currentLayer.tiles;},
    })
  },
  methods: {
    shouldRenderLayersAndTools() {
      return _.isEmpty(this.$store.floors) && _.isEmpty(this.$store.layers) && this.$store.getters.currentLayer;
    },
    save() {
      axios.post("/data/map.json", this.floors)
        .then(this.refresh)
        .catch(this.flashSaveError);
    },
    refresh() {
      location.reload();
    },
    flashSaveError() {
      // TODO - figure out Vue animation library
      console.log('ya done fucked up now! ' + JSON.stringify(arguments));
    }
  },
  components: {
    ChangeFloor,
    Layer
  }
};
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
