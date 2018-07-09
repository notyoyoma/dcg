<template lang="pug">
  .menu.d-flex.flex-column
    a.menu__item(
      v-for="{label, fn} of items"
      v-on:click="fn"
    ) {{label}}
</template>

<script>
export default {
  props: ['items']
}
</script>

<style lang="scss">
.menu {
  background: #222;
}

.menu__item {
  line-height: 0.8;
  padding: 0.5em;
  display: block;
  &:hover {
    background: #000;
  }
}
</style>
