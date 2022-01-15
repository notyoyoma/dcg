<template>
  <div class="game-layout d-flex">
    <div class="d-flex flex-column w-30">
      <div class="h-60">
        <h3>TODO -- character Sheet</h3>
      </div>
      <div class="h-40">
        <GameLog />
      </div>
    </div>
    <div class="d-flex flex-column align-items-center w-40">
      <div id="map">
        <Map />
      </div>
      <Controls />
    </div>
    <div class="d-flex flex-column w-30">
      <div class="flex-2">
        <MonsterParty />
      </div>
      <div class="h-20 flex-1">
        <EncounterFeed />
      </div>
      <EncounterLoop />
      <div class="flex-2">
        <Party />
      </div>
    </div>
  </div>
</template>

<script>
import components from "./views";
export default {
  components,
};
</script>

<style scoped lang="scss">
.game-layout {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  > * {
    flex-grow: 1;
  }
}
#map {
  height: calc(100% - 3rem);
  width: 100%;
}
</style>
