<template>
  <KeyPress :on="shortcutKey" @hit="$emit('click')">
    <button :title="tooltip">
      <slot />
    </button>
  </KeyPress>
</template>

<script>
export default {
  props: ["shortcutKey", "tooltip"],
  emits: ["click"],
};
</script>
