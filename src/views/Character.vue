<template>
  <div class="character-view">
    <div class="d-flex align-items-center">
      <div class="picture">picture</div>
      <h1>{{ selectedCharacter.name }}</h1>
    </div>
    <pre
      >{{ JSON.stringify(selectedCharacter, undefined, 2) }}
    </pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters("party", ["selectedCharacter"]),
};
</script>

<style scoped>
.picture {
  width: 150px;
  height: 150px;
  background: #555;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
