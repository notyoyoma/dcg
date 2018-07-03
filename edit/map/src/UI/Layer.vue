<template lang="pug">
  .ui-layer.d-flex.align-items-center.w-100(v-on:click="setActive" v-bind:class="{active: layer.active}")
    .layer__visibility.flex-no-grow.mr-2.btn(v-on:click="toggleVisible")
      i-fa(icon="eye" v-if="layer._isVisible")
      i-fa(icon="eye-slash" v-else)
    .layer__title.flex-grow {{ layer.title }}
    .layer__menu.flex-no-grow.ml-2.btn(v-if="layer.menu()")
      i-fa(icon='cog')
</template>

<script>
  export default {
    props: ['layer'],
    methods: {
      setActive (e) {
        this.$setActiveLayer(this.layer);
      },
      toggleVisible(e) {
        e.stopPropagation();
        this.layer.toggleVisible();
      }
    }
  }
</script>

<style lang="scss">
.ui-layer {
  background: #444;
  border-radius: 5px;
  cursor: pointer;

  &.active {
    box-shadow: inset 0 0 0 2px rgba(255,255,255,0.3);
  }
  &:hover {
    background: #555;
  }
  +.ui-layer {
    margin-top: 3px;
  }
  .btn {
    padding: 0 0.25rem;
    border-radius: 0;
    &:first-child {border-radius: 4px 0 0 4px;}
    &:last-child {border-radius: 0 4px 4px 0;}
  }
}
</style>
