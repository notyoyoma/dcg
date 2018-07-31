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
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import {getMapData} from '../../World/data';
import {storeConf} from './Store';
require('./styles.scss');

// Setup Vue filters
Vue.filter('humanize', _.startCase);


// Bootstrap App
const store = new Vuex.Store(storeConf);

getMapData()
  .then(({data})=>{
    store.commit('initMapData', data);
    store.commit('setFloor', 0);
    store.commit('setCurrentLayer', "floors");
  });

export default {
  store,
  comments: true,
  components: {
    Sidebar,
    Canvas,
  }
}
