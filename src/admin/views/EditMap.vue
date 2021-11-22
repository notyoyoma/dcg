<template>
  <div id="mapEditor">
    <TileSvgs />
    <WallSvgs />
    <Sidebar />
    <div id="canvas-container">
      <MapRender />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/admin/components/map/Sidebar";
import MapRender from "@/admin/components/map/RenderFull";
import TileSvgs from "@/admin/components/map/util/Tiles";
import WallSvgs from "@/admin/components/map/util/Walls";

export default {
  components: {
    Sidebar,
    MapRender,
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
