<template lang="pug">
  .tileset-container
    .tile(
      v-for="tile in options"
      v-bind:key="tile"
      v-on:click="selectTile(tile)"
      ) {{tile}}
</template>

<script>
export default {
  name: 'Tileset',
  props: ['options'],
}
</script>
