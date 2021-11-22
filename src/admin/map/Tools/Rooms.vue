<template>
  <div>
    <div class="tileset-container d-flex flex-wrap">
      <div
        class="tile"
        v-for="(key, id) in tools"
        :key="key"
        v-bind:class="{ active: id == currentTool }"
      >
        <KeyPress :on="id" @hit="setCurrentTool(id)">
          <svg width="15px" height="15px" style="display: block; margin: 2px">
            <use :xlink:href="'#' + key"></use>
          </svg>
        </KeyPress>
      </div>
    </div>
    <div class="roomForm" v-if="currentRoom"></div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import get from "lodash/get";

export default {
  name: "RoomsTool",
  data() {
    return {
      tools: {
        0: "eraser",
        1: "add",
        2: "edit",
        3: "select",
      },
    };
  },
  computed: {
    ...mapState(["currentTool", "layers"]),
    roomLayer() {
      return this.layers.find((layer) => layer.id === "rooms");
    },
    currentRoom() {
      return get(
        this.roomLayer,
        ["rooms", this.roomLayer.currentRoomID],
        false
      );
    },
  },
  methods: {
    ...mapMutations(["setCurrentTool"]),
  },
};
</script>
