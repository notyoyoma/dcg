import Menu from "./Menu";

export function menuFactory(items) {
  return {
    template: "<Menu v-bind:items='items' />",
    data: ()=>({items}),
    components: {Menu},
  };
}
