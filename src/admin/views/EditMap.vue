<template>
  <div id="mapEditor">
    <Sidebar />
    <div id="canvas-container">
      <MapRender />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/admin/components/map/Sidebar";
import MapRender from "@/admin/components/map/RenderFull";

export default {
  components: {
    Sidebar,
    MapRender,
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
