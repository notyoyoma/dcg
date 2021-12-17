<template>
  <Log :items="currentEncounter.log" />
</template>

<script>
import { mapState } from "vuex";
import Log from "@/components/Log";

export default {
  components: { Log },
  computed: mapState("encounter", ["currentEncounter"]),
};
</script>
