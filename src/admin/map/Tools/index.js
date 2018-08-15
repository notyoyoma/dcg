import Tileset from "./Tileset";
import RoomsTool from "./Rooms";

export function toolFactory({type=Tileset, tiles}) {
  const data = {
    tiles: {
      0: "eraser",
      ...tiles
    }
  };
  return {
    template: `<${type.name} v-bind:tiles="tiles" />`,
    data: ()=>data,
    components: {Tileset, RoomsTool},
  };
}
