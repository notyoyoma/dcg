<template lang="pug">
  div
    .tileset-container.d-flex.flex-wrap
      .tile(
        v-for="(key,id) in tools"
        v-bind:key="key"
        v-on:click="setCurrentTool(id)"
        v-bind:class="{active: id == currentTool}")
        KeyPress(:on="id" v-on:hit="setCurrentTool(id)")
        svg(width="15px" height="15px" style="display:block;margin: 2px;")
          use(:xlink:href="'#'+key")
    
    .roomForm(v-if="currentRoom")
      
</template>

<script>
import {mapMutations, mapState} from "vuex";
export default {
  name: "RoomsTool",
  data() {return{
    tools: {
      0: "eraser",
      1: "add",
      2: "edit",
      3: "select",
    }
  };},
  computed: {
    ...mapState(["currentTool", "layers"]),
    roomLayer() {
      return _.find(this.layers, {id: "rooms"});
    },
    currentRoom() {
      return _.get(this.roomLayer, ["rooms", this.roomLayer.currentRoomID], false);
    }
  },
  methods: {
    ...mapMutations([
      "setCurrentTool"
    ])
  }
};
</script>