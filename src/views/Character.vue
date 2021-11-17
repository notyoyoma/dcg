<template>
  <div class="character-view">
    <div class="d-flex align-items-center">
      <div style="width:50px;height:50px;background:#aaa">picture</div>
      <h1>{{character.name}}</h1>
    </div>
    <h4>TODO -- character sheet tabs here</h4>
  </div>
</template>

<script>
export default {
  computed: {
    character: function () {
      return this.$store.state.character;
    },
  },
};
</script>