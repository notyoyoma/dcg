<template>
  <g :id="id">
    <g v-for="(row, y) in currentFloor[id]" :key="y">
      <template v-for="(tileId, x) in row" :key="`${y},${x}`">
        <use
          width="15px"
          height="15px"
          v-if="tileId"
          :x="x * 15"
          :y="y * 15"
          :xlink:href="`#${tools[tileId]}`"
        />
      </template>
    </g>
  </g>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id", "tools"],
  computed: {
    ...mapGetters("mapEditor", ["currentFloor"]),
  },
};
</script>
