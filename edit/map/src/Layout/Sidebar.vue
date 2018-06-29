<template lang="pug">
  #sidebar
    h6.d-flex.align-items-center
      | Current Floor: {{ floor }}
      ChangeFloor
    h2 Layers
    Layers
    h2 Tools
</template>

<script>
import ChangeFloor from '../UI/ChangeFloor';
import Layers from '../Layers';
export default {
  data: ()=>({
    floor: 0
  }),
  components: {
    ChangeFloor,
    Layers
  }
}
</script>
