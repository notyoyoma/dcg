<template lang="pug">
table
  tbody
    tr v-for="character in party"
      td {character.name}
      td {character.health}
      td {character.spellPoints}
      td {character.defaultAction}      
</template>

<script>
  export default {
    data: {
      party: [
        {
          name: "bob",
          health: 15,
          spellPoints: 20,
          defaultAction: "fight"
        },
        {
          name: "bob",
          health: 15,
          spellPoints: 20,
          defaultAction: "fight"
        },
        {
          name: "bob",
          health: 15,
          spellPoints: 20,
          defaultAction: "fight"
        },
        {
          name: "bob",
          health: 15,
          spellPoints: 20,
          defaultAction: "fight"
        },
      ]
    }
  }
</script>
