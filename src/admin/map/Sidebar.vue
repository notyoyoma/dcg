<template lang="pug">
  #sidebar
    .actions.d-flex
      a.btn(href="/admin"): i-fa(icon="arrow-left")
      a.btn(href="#saveChanges"): i-fa(icon="save")
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
      .tools(v-if="currentLayer")
        h2.mt-3 Tools
        component(v-bind:is="currentLayer.toolComponent")
</template>

<script>
import {mapState, mapGetters} from "vuex";
import ChangeFloor from "./UI/ChangeFloor";
import Layer from "./UI/Layer";
export default {
  computed: {
    ...mapState([
      "floors",
      "layers",
      "currentFloorIndex",
    ]),
    ...mapGetters([
      "currentFloor",
      "currentLayer",
    ]),
  },
  methods: {
    shouldRenderLayersAndTools() {
      return _.isEmpty(this.$store.floors) && _.isEmpty(this.$store.layers) && this.$store.getters.currentLayer;
    }
  },
  components: {
    ChangeFloor,
    Layer
  },
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
