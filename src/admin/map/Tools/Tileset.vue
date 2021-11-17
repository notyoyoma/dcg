<template>
  <div class="tileset-container d-flex flex-wrap">
    <div class="tile" v-for="(key,id) in tilesWithEraser" :key="key" v-on:click="setCurrentTool(id)" :class="{active: id == currentTool}">
      <KeyPress :on="id" v-on:hit="setCurrentTool(id)"></KeyPress>
      <svg width="15px" height="15px" style="display:block;margin: 2px;">
        <use :xlink:href="'#'+key"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
export default {
  name: "Tileset",
  props: ["tiles"],
  data() {return{
    tilesWithEraser: {
      0: "eraser",
      ...this.tiles
    }
  };},
  computed: {
    ...mapState(["currentTool"]),
  },
  methods: {
    ...mapMutations([
      "setCurrentTool"
    ]),
  },
};
</script>

<style>
.tile.active {
  background: #777;
}
</style>
