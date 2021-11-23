<template>
  <g>
    <g v-for="(row, y) in currentFloorWalls" :key="y">
      <template v-for="(column, x) in row" :key="x">
        <g v-if="column && (column[0] || column[1])">
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
      </template>
    </g>
  </g>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["id"],
  data: () => ({
    tiles: {
      1: "wall",
      2: "door",
      3: "hiddenDoor",
    },
  }),
  computed: {
    ...mapState("mapEditor", ["currentFloorIndex"]),
    ...mapState("map", ["floors"]),
    currentFloorWalls() {
      return this.floors[this.currentFloorIndex].walls;
    },
  },
};
</script>
