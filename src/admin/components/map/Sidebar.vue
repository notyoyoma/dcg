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
        <template v-for="(layer, key, index) in layers" :key="`layer-${key}`">
          <KeyPress :on="`alt-${index + 1}`" @hit="setAsCurrentLayer(key)">
            <Layer :layerKey="key" :menuComponent="layer.menuComponent" />
          </KeyPress>
        </template>
      </div>
      <div class="tools" v-if="currentLayerTools.length">
        <h2 class="mt-3">Tools</h2>
        <Tools :layerTools="currentLayerTools" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ChangeFloor from "./ChangeFloor";
import Layer from "./Layer";
import Tools from "./Tools";
import axios from "axios";

import rooms from "./rooms";

const layers = { rooms };

export default {
  components: {
    ChangeFloor,
    Layer,
    Tools,
  },
  data: () => ({ layers }),
  computed: {
    ...mapState("mapEditor", ["currentFloorIndex", "currentLayerKey"]),
    currentLayerTools() {
      return this.layers[this.currentLayerKey].tools;
    },
  },
  methods: {
    ...mapMutations("mapEditor", ["setCurrentLayer"]),
    save() {
      axios
        .post("/data/map", this.$store.state.map)
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
