<template>
  <h1>Hi there</h1>
</template>

<script>
import {mapMutations, mapState} from "vuex";
export default {
  name: "RoomsTool",
  props: ["tiles"],
  computed: mapState(["currentTool"]),
  methods: {
    ...mapMutations([
      "setCurrentTool"
    ]),
    keyUpHandler(e) {
      const pressed = parseInt(String.fromCharCode(e.keyCode));
      if (_.has(this.tiles, pressed)) {
        this.setCurrentTool(pressed);
      }
    }
  },
  mounted() {
    $(document).on("keyup", this.keyUpHandler);
  },
  beforeDestroy() {
    $(document).off("keyup", this.keyUpHandler);
  }
};
</script>