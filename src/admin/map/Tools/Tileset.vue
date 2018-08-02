<template lang="pug">
  .tileset-container
    .tile(
      v-for="(key,id) in options"
      v-bind:key="key"
      v-on:click="setCurrentTool(id)"
      v-bind:class="{active: id == currentTool}")
      svg(width="15px" height="15px")
        use(:xlink:href="'#'+key")
</template>

<script>
import {mapMutations, mapState} from 'vuex';
export default {
  name: 'Tileset',
  props: ['options'],
  computed: mapState(['currentTool']),
  methods: {
    ...mapMutations([
      'setCurrentTool'
    ]),
  }
}
</script>

<style>
.tile.active {
  background: #777;
}
</style>
