<template lang="pug">
  .map
    h3 TODO -- map here
</template>

<script>
export default {
  computed: {
    visibleMap () {return this.$store.state.visibleMap}
  }
}
</script>