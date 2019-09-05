<template lang="pug">
    #app-layout.d-flex(v-else)
      #loading(v-if=("loading"))
      template(v-else)
        .d-flex.flex-column
          .h-60
            Character
          .h-40
            Party
        Map
        .d-flex.flex-column
          .h-40
            Encounter
          .h-20
            EncounterFeed
          .h-40
            GameLog
</template>

<script>
import views from './views';
export default {
  computed: {
    loading() {return this.$store.state.loading}
  },
  components: views
}
</script>