<template>
  <div id="layout">
    <Sidebar />
    <div id="canvas-container">
      <Canvas />
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar';
import Canvas from './Canvas';
export default {
  name: 'Layout',
  components: {
    Sidebar, 
    Canvas,
  }
}
</script>

<style src="./styles.scss" lang="scss" />
