<template lang="pug">
  #app-layout.d-flex
    .d-flex.flex-column
      .h-60
        Character
      .h-40
        Party
    Map
    .d-flex.flex-column
      .h-40
        Combat
      .h-20
        CombatFeed
      .h-40
        GameLog
</template>

<script>
import views from './views';
export default {
  components: views
}
</script>