<template lang="pug">
  .character-view
    .d-flex.align-items-center
      div(style="width:50px;height:50px;background:#aaa") picture
      h1 {{character.name}}
    h4 TODO -- character sheet tabs here
</template>

<script>
  export default {
    computed: {
      character: function () {
        return this.$store.state.character
      }
    }
  }
</script>