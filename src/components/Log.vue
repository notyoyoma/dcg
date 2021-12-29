<template>
  <div class="log">
    <div v-for="(text, index) in items" :key="index">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
};
</script>

<style scoped>
.log {
  overflow-y: scroll;
  overflow-x: hidden;
  background: #eee;
  padding: 2px;
  height: 100%;
  box-sizing: border-box;
  color: #333;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
