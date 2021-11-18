<template>
  <div id="layout">
    <TileSvgs />
    <WallSvgs />
    <Sidebar />
    <div id="canvas-container">
      <Canvas />
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";
import TileSvgs from "./Tools/Tiles";
import WallSvgs from "./Tools/Walls";

export default {
  components: {
    Sidebar,
    Canvas,
    TileSvgs,
    WallSvgs,
  },
};
</script>

<style lang="scss">
#canvas-container {
  background: #555;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

#canvas {
  background: #000;
  color: #fff;
}
</style>
