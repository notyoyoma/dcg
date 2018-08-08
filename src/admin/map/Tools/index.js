import Tileset from "./Tileset";

export function toolFactory({type=Tileset, tiles}) {
  return {
    template: `<${type.name} v-bind:tiles="tiles" />`,
    data: ()=>({tiles}),
    components: {Tileset},
  };
}
