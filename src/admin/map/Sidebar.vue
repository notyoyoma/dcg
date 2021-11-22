<template>
  <div id="sidebar">
    <div class="actions d-flex">
      <KeyPress on="ctrl-s" @hit="save">
        <span class="p-2"><i-fa icon="save"></i-fa></span>
      </KeyPress>
      <KeyPress on="ctrl-r" @hit="refresh">
        <span class="p-2"><i-fa icon="sync-alt"></i-fa></span>
      </KeyPress>
    </div>
    <div class="p-3">
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

const tools = [];

export default {
  computed: {
    ...mapState("mapEditor", [
      "currentToolIndex",
      "currentFloorIndex",
      "currentLayerKey",
    ]),
    toolComponent() {
      return tools[this.currentToolIndex];
    },
    toolTiles() {
      return [];
    },
  },
  methods: {
    save() {
      axios
        .post("/data/map", this.floors)
        .then(this.refresh)
        .catch(this.flashSaveError);
    },
    refresh() {
      this.$store.dispatch("map/load");
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
