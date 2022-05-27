<template>
  <div class="EncounterLoop">
    <div id="progress" ref="progress"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { delay } from "@/utils/async";

export default {
  name: "EncounterLoop",
  computed: {
    ...mapState("encounter", ["turnSpeed", "actions"]),
  },
  methods: {
    async startLoop() {
      const el = this.$refs.progress;
      el.style.animationDuration = `${this.turnSpeed}ms`;
      el.classList.add("running");
      await delay(this.turnSpeed * 0.98);
      el.classList.remove("running");
    },
    async stopLoop() {
      this.$refs.progress.classList.remove("running");
    },
  },
  mounted() {
    this.$bind("before:Encounter.tick", this.startLoop);
    this.$bind("after:Encounter.end", this.stopLoop);
  },
};
</script>

<style lang="scss" scoped>
.EncounterLoop {
  height: 40px;
  position: relative;
}
</style>

<style lang="scss">
@keyframes progress-bar-fill {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
#progress {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  animation-timing-function: linear;
  background: #000;

  &.running {
    animation-name: progress-bar-fill;
  }
}
</style>
