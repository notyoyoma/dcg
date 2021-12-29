<template>
  <div class="encounter">
    <div
      class="monsterGroup"
      v-for="(monster, i) in monsterParty"
      :key="`monster-${i}`"
    >
      <div class="liner">
        <img
          v-for="n in monster.alive"
          :key="`monster-${i}-${n}`"
          :src="`/assets/${monster.name}.svg`"
        />
      </div>
      <HealthBar :current="monster.hp" :max="monster.stats.hp" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import get from "lodash/get";
import pluralize from "pluralize";
import HealthBar from "@/components/misc/HealthBar";

export default {
  components: { HealthBar },
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
.monsterGroup {
  width: 50%;
  height: 50%;
  padding-bottom: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  box-sizing: border-box;

  .liner {
    position: relative;
    justify-self: center;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }

  img:first-child {
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
    position: relative;
    z-index: 2;
  }

  img:not(:first-child) {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.4) translate(80%, 80%);
    z-index: 1;
  }

  $max-group-size: 10;
  @for $i from 2 through $max-group-size {
    img:nth-child(#{$i}) {
      margin-top: $i * 4px;
      margin-left: $i * 4px;
    }
  }
}
</style>
