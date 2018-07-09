// vendors
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vuetify from 'vuetify';
import Vuex from 'vuex'

// Setup Vendors
Vue.use(Vuetify)
Vue.use(Vuex)
library.add([faEye, faEyeSlash, faCog]);
Vue.component('i-fa', FontAwesomeIcon);

// app
import Layout from './Layout';
import {floors, effects} from "./Layers";
require('./styles.scss');

// Setup Vue filters
Vue.filter('humanize', _.startCase)

// Bootstrap App
const store = new Vuex.Store({
  state: {
    floors: [],
    currentFloor: 0,
    layers: [
      floors,
      effects,
    ],
    currentLayer: floors,
  },
  mutations: {
    setCurrentLayer(state, layer) {
      _.each(state.layers, (layer)=>layer.active = false);
      state.currentLayer = layer;
    }
  }
});

// Initialize app
new Vue({
  el: "#app",
  store,
  components: {
    Layout
  },
  template: '<Layout />'
});
