<template lang="pug">
table
  tbody
    tr(v-for="character in party")
      td {{character.name}}
      td {{character.health}}
      td {{character.spellPoints}}
      td {{character.currentAction}}
</template>

<script>
  export default {
    computed: {
      party () { return this.$store.state.party }
    }
  }
</script>
