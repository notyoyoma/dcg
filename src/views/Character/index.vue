<template lang="pug">
  .d-flex.align-items-center
    div(style="width:50px;height:50px;background:#aaa") picture
    h1 {{name}}
  p tabs here...
</template>

<script>
  export default {
    data: ()=>({
      name: 'Marty'
    }),
    components: {
    }
  }
</script>