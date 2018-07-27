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
import {LayerManager} from "./Layers/LayerManager";
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import {getMapData} from '../../World/data'
require('./styles.scss');

// Setup Vue filters
Vue.filter('humanize', _.startCase);

// Bootstrap App
const store = new Vuex.Store({
  state: {
    floors: [],
    currentFloorIndex: 0,
    layers: false,
    currentLayerIndex: 0,
    currentTool: false,
  },
  getters: {
    getCurrentFloor(state) {
      return state.floors[state.currentFloorIndex];
    }
  },
  mutations: {
    setMapData(state, mapData) {
      state.floors = mapData;
      state.layers = new LayerManager(this);
    },
    setCurrentLayer(state, layerIndex) {
      state.currentLayerIndex = layerIndex;
    },
    setCurrentTool(state, tool) {
      state.currentTool = tool;
    },
    setFloor(state, floorIndex) {
      state.currentFloorIndex = floorIndex;
    },
    changeFloor(state, delta) {
      this.setFloor(
        Math.max(0, // don't go below 0
        Math.min(state.floors.length-1, // don't go above max floors
          state.currentFloorIndex + delta))); // adjust by delta;
    }
  }

});

getMapData()
  .then(({data})=>{
    store.commit('setMapData', data);
  });

export default {
  store,
  components: {
    Sidebar,
    Canvas,
  }
}
