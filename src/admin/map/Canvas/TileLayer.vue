<template>
  <g>
    <g v-for="(row,y) in currentFloor[id]"
      v-bind:key="`${id}-row-${y}`">
      <use v-for="(tileId,x) in row" width="15px" height="15px"
        v-if="tileId"
        v-bind:x="x*15" v-bind:y="y*15"
        :xlink:href="'#'+tiles[tileId]" />
    </g>
  </g>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    props: ['id', 'tiles'],
    computed: {
        ...mapGetters(['currentFloor']),
    }
  };
</script>