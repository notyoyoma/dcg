<template lang="pug">
  .tileset-container.d-flex.flex-wrap
    .tile(
      v-for="(key,id) in tilesWithEraser"
      v-bind:key="key"
      v-on:click="setCurrentTool(id)"
      v-bind:class="{active: id == currentTool}")
      KeyPress(:on="id" v-on:hit="setCurrentTool(id)")
      svg(width="15px" height="15px" style="display:block;margin: 2px;")
        use(:xlink:href="'#'+key")
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
