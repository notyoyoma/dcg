import Tileset from './Tileset'

const ALL_TILE_IDS = ['stairs-up', 'stairs-down', 'no-floor'];

export function toolFactory({type=Tileset, options=ALL_TILE_IDS}) {
  return {
    template: `<${type.name} v-bind:options="options" />`,
    data: ()=>({options}),
    components: {Tileset},
  }
}
