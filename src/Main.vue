<template>
  <LoadingAnimation v-if="loading" />
  <template v-else>
    <router-view />
    <div v-if="isDevEnv" class="adminNav">
      <router-link to="admin">Admin</router-link>
    </div>
  </template>
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
* {
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
</style>

<style src="bootstrap/scss/_helpers.scss" lang="scss"></style>
<style src="bootstrap/scss/utilities/_api.scss" lang="scss"></style>
