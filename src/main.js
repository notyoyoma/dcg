
import Vue from "vue/dist/vue.js";
import Layout from './Layout';
import Game from "./game";
import Vuex from 'vuex';

require('./styles/index.scss');
Vue.use(Vuex);
const game = new Game();
window.game = game;
Vue.prototype.$game = game;

new Vue({
  el: "#app",
  template: "<Layout />",
  components: {Layout},
  store: game.store,
});