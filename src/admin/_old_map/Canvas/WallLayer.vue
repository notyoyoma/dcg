<template>
  <g>
    <g v-for="(row, y) in currentFloor[id]" :key="y">
      <g v-for="(column, x) in row" :key="x" v-if="column">
        <use
          width="15px"
          height="15px"
          v-if="column[0]"
          :x="x * 15"
          :y="y * 15"
          :xlink:href="`#${tiles[column[0]]}`"
          :transform="`rotate(-90 ${x * 15 + 8} ${y * 15 + 8}) translate(8)`"
        />
        <use
          width="15px"
          height="15px"
          v-if="column[1]"
          :x="x * 15"
          :y="y * 15"
          :xlink:href="`#${tiles[column[1]]}`"
          transform="translate(-7)"
        />
      </g>
    </g>
  </g>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["id", "tiles"],
  computed: {
    ...mapGetters(["currentFloor"]),
  },
};
</script>
