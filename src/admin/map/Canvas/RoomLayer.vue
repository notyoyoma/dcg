<template>
  <g>
    <g v-for="(row,y) in currentFloor.roomCoords" v-bind:key="y">
      <rect v-for="(roomId,x) in row" width="15px" height="15px"
        v-if="roomId"
        v-bind:key="x"
        v-bind:x="x*15" v-bind:y="y*15"
        :fill="idColors[roomId]"/>
    </g>
  </g>
</template>

<script>
import {mapGetters} from "vuex";
import roomIDColors from "./RoomIDColors";
export default {
  props: ["id", "tiles"],
  data() {return {
    idColors: roomIDColors
  };},
  computed: {
    ...mapGetters(["currentFloor"]),
  }
};
</script>