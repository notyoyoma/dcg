<template lang="pug">
  .ui-layer.d-flex.align-items-center.w-100(v-on:click="setCurrentLayer(layer)" v-bind:class="{active: layer.id == currentLayer.id}")
    .layer__visibility.flex-no-grow.mr-2.btn(v-on:click="toggleVisible")
      i-fa(icon="eye" v-if="layer._isVisible")
      i-fa(icon="eye-slash" v-else)
    .layer__title.flex-grow {{ layer.title }}
    .layer__menu.flex-no-grow.ml-2.btn(v-if="hasMenu" v-on:click="toggleMenu")
      i-fa(icon='cog')
      component(v-bind:is="layer.menuComponent" v-if="menuOpen")
</template>

<script>
  import {mapState, mapMutations} from 'vuex';
  export default {
    props: ['layer'],
    data(){return{
      menuOpen: false,
      hasMenu: !!this.layer.menuComponent,
    }},
    computed: mapState(['currentLayer']),
    methods: {
      ...mapMutations([
        'setCurrentLayer'
      ]),
      toggleMenu(e) {
        e.stopPropagation();
        this.menuOpen = !this.menuOpen;
        if (this.menuOpen) {
          document.addEventListener('click', this.toggleMenu);
        } else {
          document.removeEventListener('click', this.toggleMenu);
        }
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
  .layer__menu {
    position: relative;
  }
  .menu {
    position: absolute;
    right: 0;
    top: 90%;
  }
}
</style>
