<template>
  <LoadingAnimation v-if="loading" />
  <router-view v-else />
  <admin-nav v-if="isDevEnv" />
</template>

<script>
import { mapState } from "vuex";

import LoadingAnimation from "./components/misc/LoadingAnimation";

export default {
  computed: mapState(["loading", "isDevEnv"]),
  components: {
    LoadingAnimation,
  },
};
</script>

<style lang="scss">
body {
  font-family: "Abel", sans-serif;
  color: #fff;
}
h1,
h2,
h3,
h4,
h5,
h6,
blockquote {
  font-family: "Fondamento", cursive;
  color: $yellow;
}

body {
  margin: 0;
  background: $base;
  color: $text;
}

a {
  text-decoration: none;
  color: $gold-dark;
  &:hover {
    color: $blue;
  }
}

h1,
h2,
h3 {
  color: $gold-light;
}

#app {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>

<style src="@/styles/main.scss" lang="scss"></style>
