<template lang="pug">
  #layers.d-flex.flex-row
    LayerUI(v-for="layer in layers" :key="layer.id" v-bind:layer="layer")
</template>


<script>
import LayerUI from "../UI/Layer";

import floors from "./floors"
//import effects from "./effects"

export default {
  data: ()=>({
    layers: [
      floors,
 //     effects,
    ]
  }),
  components: {
    LayerUI
  }
}
</script>
