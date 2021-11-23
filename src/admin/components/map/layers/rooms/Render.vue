<template>
  <g>
    <g v-for="(row, y) in currentFloor.roomCoords" :key="y">
      <template v-for="(roomId, x) in row" :key="`${y},${x}`">
        <rect
          width="15px"
          height="15px"
          v-if="roomId"
          :x="x * 15"
          :y="y * 15"
          :fill="roomIDColors[roomId]"
        />
      </template>
    </g>
  </g>
</template>

<script>
import { mapGetters } from "vuex";
import roomIDColors from "./RoomIDColors";

export default {
  props: ["id", "tiles"],
  data: () => ({
    roomIDColors,
  }),
  computed: {
    ...mapGetters("mapEditor", ["currentFloor"]),
  },
};
</script>
