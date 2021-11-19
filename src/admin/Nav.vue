<template>
  <div class="adminNav">
    <i-fa icon="cog" class="p-2" />
    <router-link to="/">Game</router-link>
    <div class="vr"></div>
    <router-link to="/adminMap">Map</router-link>
  </div>
</template>

<style scoped lang="scss">
.adminNav {
  display: flex;
  position: absolute;
  bottom: 0;
  left: calc(100% - 2rem);
  background: $red;
  color: black;
  align-items: center;

  &:hover {
    left: auto;
    right: 0;
  }

  a {
    padding: 3px;
    color: black;
    &:hover {
      color: #fff;
    }

    &.router-link-active {
      text-decoration: underline;
      color: #fff;
      cursor: default;
    }
  }
}
</style>
