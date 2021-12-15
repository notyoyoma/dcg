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
        <template
          v-for="(layer, index) in sidebarLayers"
          :key="`layer-${layer.id}`"
        >
          <KeyPress :on="`alt-${index + 1}`" @hit="setCurrentLayer(layer.id)">
            <Layer :layerKey="layer.id" :menuComponent="layer.menuComponent" />
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
import { mapMutations, mapState, mapActions } from "vuex";
import ChangeFloor from "./ChangeFloor";
import Layer from "./LayerHandle";
import Tools from "./Tools";

import layers, { sidebarLayers } from "@/components/map/layers";

export default {
  components: {
    ChangeFloor,
    Layer,
    Tools,
  },
  data: () => ({ sidebarLayers }),
  computed: {
    ...mapState("mapEditor", ["currentFloorIndex", "currentLayerKey"]),
    currentLayerTools() {
      return layers[this.currentLayerKey].tools;
    },
  },
  methods: {
    ...mapMutations("mapEditor", ["setCurrentLayer"]),
    ...mapActions("mapEditor", ["writeToFile", "refreshFromFile"]),
    save(e) {
      if (e && e.preventDefault) e.preventDefault();
      this.writeToFile();
    },
    refresh(e) {
      if (e && e.preventDefault) e.preventDefault();
      this.refreshFromFile();
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

  #layers > *:not(:first-child) {
    margin-top: 4px;
  }
}
</style>
