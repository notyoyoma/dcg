<template>
  <div class="game-layout d-flex">
    <div class="d-flex flex-column">
      <div class="h-60">
        <Character></Character>
      </div>
      <div class="h-40">
        <Party></Party>
      </div>
    </div>
    <Map></Map>
    <div class="d-flex flex-column">
      <div class="h-40">
        <Encounter></Encounter>
      </div>
      <div class="h-20">
        <EncounterFeed></EncounterFeed>
      </div>
      <div class="h-40">
        <GameLog></GameLog>
      </div>
    </div>
  </div>
</template>

<script>
import views from "./views";
export default {
  components: views,
};
</script>

<style scoped lang="scss">
.game-layout {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  & > * {
    flex-grow: 1;
  }
}
</style>
