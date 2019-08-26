<template lang="pug">
  Marty
</template>

<script>
export default {
  computed: {
    currentCharacter() {
      return this.$game.selectedCharacter
    }
  }
}
</script>