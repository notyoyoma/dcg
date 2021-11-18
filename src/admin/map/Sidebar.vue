<template>
  <div id="sidebar">
    <div class="actions d-flex">
      <a class="btn" href="/admin"> <i-fa icon="arrow-left"></i-fa></a
      ><a class="btn" @click="save()"> <i-fa icon="save"></i-fa></a
      ><a class="btn" href="/admin/map"> <i-fa icon="sync-alt"></i-fa></a>
    </div>
    <div class="p-3" v-if="shouldRenderLayersAndTools()">
      <h6 class="d-flex align-items-center">
        Current Floor: {{ currentFloorIndex + 1 }}
        <ChangeFloor></ChangeFloor>
      </h6>
      <h2>Layers</h2>
      <div class="d-flex flex-column" id="layers">
        <Layer
          v-for="(layer, index) in layers"
          :key="layer.id"
          v-bind:layer="layer"
          v-bind:index="index"
        ></Layer>
      </div>
      <div class="tools" v-if="toolComponent">
        <h2 class="mt-3">Tools</h2>
        <component
          v-bind:is="toolComponent"
          v-bind:key="currentLayerKey + '-tools'"
          :tiles="toolTiles"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ChangeFloor from "./UI/ChangeFloor";
import Layer from "./UI/Layer";
import axios from "axios";
export default {
  computed: {
    ...mapState(["floors", "layers", "currentFloorIndex", "currentLayerKey"]),
    ...mapState({
      currentLayer: (state) =>
        _.find(state.layers, { id: state.currentLayerKey }),
      toolComponent() {
        return this.currentLayer.toolComponent;
      },
      toolTiles() {
        return this.currentLayer.tiles;
      },
    }),
  },
  methods: {
    shouldRenderLayersAndTools() {
      return (
        _.isEmpty(this.$store.floors) &&
        _.isEmpty(this.$store.layers) &&
        this.$store.getters.currentLayer
      );
    },
    save() {
      axios
        .post("/data/map.json", this.floors)
        .then(this.refresh)
        .catch(this.flashSaveError);
    },
    refresh() {
      location.reload();
    },
    flashSaveError() {
      // TODO - figure out Vue animation library
      console.log("ya done fucked up now! " + JSON.stringify(arguments));
    },
  },
  components: {
    ChangeFloor,
    Layer,
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
