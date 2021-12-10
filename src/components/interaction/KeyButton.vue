<template>
  <KeyPress :on="shortcutKey" @hit="$emit('click')">
    <button @click="$emit('click')" :title="tooltip">
      <slot />
    </button>
  </KeyPress>
</template>

<script>
export default {
  props: ["shortcutKey", "tooltip"],
};
</script>
