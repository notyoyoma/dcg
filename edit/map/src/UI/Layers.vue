<template lang="pug">
  #layers.d-flex.flex-column
    LayerUI(v-for="layer in layers" :key="layer.id" v-bind:layer="layer")
</template>


<script>
import LayerUI from "./Layer";

export default {
  data () {
    return {
      layers: this.$layers
    };
  },
  components: {
    LayerUI
  }
};
</script>
