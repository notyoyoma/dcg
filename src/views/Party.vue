<template>
  <table>
    <tbody>
      <tr v-for="character in party" :key="character.name">
        <td>{{character.name}}</td>
        <td>{{character.health}}</td>
        <td>{{character.spellPoints}}</td>
        <td>{{character.currentAction}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    computed: {
      party () { return this.$store.state.party }
    }
  }
</script>
