<template>
  <div class="d-flex flex-column">
    <div class="key-row">
      <div class="w-33">
        <KeyButton shortcutKey="up" @click="moveForward">
          <i-fa icon="arrow-up" />
        </KeyButton>
      </div>
    </div>
    <div class="key-row">
      <div class="w-33">
        <KeyButton shortcutKey="left" @click="turn(-1)">
          <i-fa icon="arrow-left" />
        </KeyButton>
      </div>
      <div class="w-33">
        <KeyButton shortcutKey="down" @click="turn(+2)">
          <i-fa icon="arrow-down" />
        </KeyButton>
      </div>
      <div class="w-33">
        <KeyButton shortcutKey="right" @click="turn(+1)">
          <i-fa icon="arrow-right" />
        </KeyButton>
      </div>
    </div>
  </div>
</template>

<script>
import { party } from "@/game/modules";

export default {
  methods: {
    moveForward() {
      party.move();
    },
    turn(delta) {
      party.turn(delta);
    },
  },
};
</script>

<style scoped>
.key-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
