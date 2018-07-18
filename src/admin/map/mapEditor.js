// vendors
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash, faCog, faSave, faSyncAlt, faArrowLeft
        } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vuetify from 'vuetify';
import Vuex from 'vuex'

// Setup Vendors
Vue.use(Vuetify)
Vue.use(Vuex)
library.add([faEye, faEyeSlash, faCog, faSave, faSyncAlt, faArrowLeft]);
Vue.component('i-fa', FontAwesomeIcon);

// app
import {floors, effects} from "./Layers";
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import mapData from '../../World/data';
require('./styles.scss');

// Setup Vue filters
Vue.filter('humanize', _.startCase)

// Bootstrap App
const store = new Vuex.Store({
  state: {
    floors: mapData,
    currentFloor: mapData[0],
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
    },
    changeFloor(state, delta) {
      state.currentFloor = Math.max(0,
        Math.min(state.floors.length-1, state.currentFloor));
    }
  }

});

export default {
  store,
  components: {
    Sidebar,
    Canvas,
  }
}
