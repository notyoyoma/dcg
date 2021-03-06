// vendors
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash, faCog, faSave, faSyncAlt, faArrowLeft,
  faEraser, faPlus, faPen, faMousePointer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import axios from 'axios';

// Setup Vendors
Vue.use(Vuetify);
Vue.use(Vuex);
library.add([faEye, faEyeSlash, faCog, faSave, faSyncAlt, faArrowLeft,
  faEraser, faPlus, faPen, faMousePointer]);
Vue.component("i-fa", FontAwesomeIcon);

// app
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";
import TileSvgs from "./Tools/Tiles";
import WallSvgs from "./Tools/Walls";
import KeyPress from "../../interaction/KeyPress";
import {storeConf} from "./Store";
require("./styles.scss");

// Setup Vue globals
Vue.filter("humanize", _.startCase);
Vue.component("KeyPress", KeyPress);


// Bootstrap App
const store = new Vuex.Store(storeConf);

axios.get('/data/map.json')
  .then(({data}) => {
    store.commit("initMapData", data);
    store.commit("setFloor", 0);
    store.commit("setCurrentLayer", "floors");
  });

export default {
  store,
  comments: true,
  components: {
    Sidebar,
    Canvas,
    TileSvgs,
    WallSvgs,
  }
};
