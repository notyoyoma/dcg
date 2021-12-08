<template>
  <g :id="id">
    <rect
      x="0"
      y="0"
      width="600"
      height="600"
      stroke="#fff"
      fill="transparent"
    />
    <g v-for="(row, y) in currentFloor.walls" :key="y">
      <template v-for="(column, x) in row" :key="x">
        <g v-if="column && (column[0] || column[1])">
          <use
            width="15px"
            height="15px"
            v-if="column[0]"
            :x="x * 15"
            :y="y * 15"
            :xlink:href="`#${tools[column[0]]}`"
            :transform="`rotate(-90 ${x * 15 + 8} ${y * 15 + 8}) translate(8)`"
          />
          <use
            width="15px"
            height="15px"
            v-if="column[1]"
            :x="x * 15"
            :y="y * 15"
            :xlink:href="`#${tools[column[1]]}`"
            transform="translate(-7)"
          />
        </g>
      </template>
    </g>
  </g>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id", "tools"],
  data: () => ({
    tiles: {
      1: "wall",
      2: "door",
      3: "hiddenDoor",
    },
  }),
  computed: {
    ...mapGetters("mapEditor", ["currentFloor"]),
  },
};
</script>
