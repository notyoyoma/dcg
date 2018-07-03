<template lang="pug">
  .tileset-container
    .tile(
      v-for="tile in tiles"
      v-bind:key="tile"
      v-on:click="selectTile(tile)"
      ) {{tile}}
</template>

<script>
export default {
  name: 'Tileset'
}
</script>
