<template>
  <div id="mapEditor">
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
#mapEditor {
  height: 100vh;
  display: flex;
  justify-content: stretch;
}
#canvas-container {
  align-self: stretch;
  background: #555;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

#canvas {
  background: #000;
  color: #fff;
}
</style>
