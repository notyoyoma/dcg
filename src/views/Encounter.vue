<template>
  <div class="encounter">
    <div
      class="monster"
      v-for="(monster, i) in monsterParty"
      :key="`monster-${i}`"
    >
      {{ monster.count }} {{ pluralize(monster.name, monster.count) }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import get from "lodash/get";
import pluralize from "pluralize";

export default {
  computed: {
    ...mapState("encounter", ["currentEncounter"]),
    monsterParty() {
      return get(this.currentEncounter, "monsters.party", []);
    },
  },
  methods: {
    pluralize,
  },
};
</script>

<style lang="scss">
.encounter {
  height: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
}
.monster {
  width: 50%;
  height: 50%;
}
</style>
