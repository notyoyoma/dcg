import Vue from "vue";
import Vuex from "vuex";

import Main from "./Main";
import store from "./store";

require("./styles/index.scss");
Vue.use(Vuex);

new Vue({
  el: "#app",
  template: "<Main />",
  components: { Main },
  store,
});
