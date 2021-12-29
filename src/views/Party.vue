<template>
  <div class="PartyLayout">
    <div v-for="character in party" :key="character.name">
      <img :src="`/assets/${character.image}.svg`" />
      <td>{{ character.name }}</td>
      <HealthBar :current="character.currentHp" :max="character.maxHp" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HealthBar from "@/components/misc/HealthBar";

export default {
  components: { HealthBar },
  computed: mapState("party", ["party"]),
};
</script>

<style lang="scss" scoped>
.PartyLayout {
  display: flex;
  flex-wrap: wrap;

  > * {
    width: 50%;
    height: 50%;
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
