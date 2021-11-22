<template>
  <g>
    <g v-for="(row, y) in currentFloor[id]" :key="y">
      <use
        v-for="(tileId, x) in row"
        width="15px"
        height="15px"
        v-if="tileId"
        :key="x"
        :x="x * 15"
        :y="y * 15"
        :xlink:href="'#' + tiles[tileId]"
      />
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
