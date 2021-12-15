<template>
  <div class="menu d-flex flex-column">
    <a
      class="menu__item"
      v-for="{ label, fn } of items"
      :key="label"
      @click="fn"
    >
      {{ label }}
    </a>
  </div>
</template>

<script>
export default {
  props: ["items"],
};
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
