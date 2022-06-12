<template>
  <span class="Action">
    {{ emoji }}
    <template v-if="regGroups.detail">{{ regGroups.detail }}</template>
  </span>
</template>

<script>
export default {
  props: {
    action: { type: String, required: true },
  },
  computed: {
    regGroups() {
      return this.action.match(/^(?<base>[^\s]+)(:? '(?<detail>[^\s]+)')?/i)
        .groups;
    },
    emoji() {
      switch (this.regGroups.base) {
        case "fight":
          return "⚔️";
        case "defend":
          return "🛡️";
        case "cast":
          return "✨️";
        default:
          return "?";
      }
    },
  },
};
</script>

<style scoped>
.Action {
  padding: 0 2px;
  display: inline-block;
  white-space: nowrap;
  color: #000;
  background: rgba(255, 255, 255, 0.75);
}
</style>
