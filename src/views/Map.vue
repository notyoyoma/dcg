<template lang="pug">
  .map
    h3 TODO -- map here
</template>

<script>
export default {
  computed: {
    visibleFloor () {return this.$store.state.visibleFloor}
  }
}
</script>