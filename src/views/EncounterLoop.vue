<template>
  <div class="EncounterLoop">
    <div id="progress" ref="progress" @animationend="logReset"></div>
    <div class="actions">
      <div
        class="action"
        v-for="([action, actor], index) in actions"
        :key="`action-${index}`"
      >
        <img :src="`/assets/${actor.image}.svg`" />
        <Action :action="action" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { delay } from "@/utils/async";
import { encounter } from "@/game/modules";
import Action from "@/components/interaction/Action";

export default {
  name: "EncounterLoop",
  components: { Action },
  computed: {
    ...mapState("encounter", ["turnSpeed", "actions"]),
  },
  methods: {
    logReset() {
      console.debug("EncounterLoop.logReset - Encounter.tick logic is slow");
      this.reset();
    },
    reset() {
      this.$refs.progress.classList.remove("running");
    },
    async start() {
      const el = this.$refs.progress;
      if (el.classList.contains("running")) {
        this.reset();
        await this.$nextTick();
        await delay(10);
      }
      el.style.animationDuration = `${this.turnSpeed}ms`;
      el.classList.add("running");
    },
  },
  mounted() {
    if (encounter.tickInterval) this.start();
    this.$bind("before:Encounter.tick", this.start);
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

.actions {
  display: flex;
  justify-content: space-around;
  height: 100%;
  overflow: hidden;
  position: relative;

  .action {
    position: relative;
    img {
      max-height: 100%;
    }
    .Action {
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }
}
</style>
