
import Vue from "vue/dist/vue.js";
import Layout from './Layout';
import Game from "./game";

require('./styles/index.scss');

Vue.prototype.$game = new Game();

new Vue({
  el: "#app",
  template: "<Layout />",
  components: {Layout},
});