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

const isDevEnv = process.env === "development";

export default {
  data: () => ({ isDevEnv }),
  computed: {
    ...mapState("loading"),
  },
  components: {
    LoadingAnimation,
  },
};
</script>
