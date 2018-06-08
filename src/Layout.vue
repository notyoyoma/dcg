<template>
  <layout-golden>
    <gl-col>
      <gl-component title="Character">
        <h1>hi</h1>
      </gl-component>
    </gl-col>
  </layout-golden>
</template>

<script>
  import vgl from 'vue-golden-layout';
  import { Character } from 'views';

  Vue.use(vgl);

  export default {
    components: {
      Character,
    }
  }
</script>
