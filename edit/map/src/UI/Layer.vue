<template lang="pug">
  .ui-layer.d-flex
    .layer__visibility.flex-no-grow
      span(v-on:click="layer.toggleVisible()") {{ layer.visible ? 'o' : 'x' }}
    .layer__title {{ layer.title }}
    .layer__menu.flex-no-grow {{ layer.menu() }}
</template>

<script>
  export default {
    props: ['layer']
  }
</script>
