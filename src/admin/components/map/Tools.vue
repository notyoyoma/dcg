<template>
  <div class="d-flex flex-wrap">
    <div
      class="tile"
      v-for="(key, id) in layerTools"
      :key="key"
      :class="{ active: id == currentToolIndex }"
    >
      <KeyPress :on="'' + id" @hit="setCurrentTool(id)">
        <svg width="15px" height="15px" style="display: block; margin: 2px">
          <use :xlink:href="'#' + key"></use>
        </svg>
      </KeyPress>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Tileset",
  props: ["layerTools"],
  computed: mapState("mapEditor", ["currentToolIndex"]),
  methods: mapMutations("mapEditor", ["setCurrentTool"]),
};
</script>

<style>
.tile.active {
  background: #777;
}
</style>
