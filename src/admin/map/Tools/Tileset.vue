<template lang="pug">
  .tileset-container
    .tile(
      v-for="tile in options"
      v-bind:key="tile"
      v-on:click="setCurrentTool(tile)"
      ) {{tile}}
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
