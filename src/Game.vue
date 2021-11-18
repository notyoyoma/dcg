<template>
  <div class="d-flex" id="app-layout">
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
