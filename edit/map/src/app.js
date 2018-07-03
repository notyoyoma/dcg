// vendors
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vuetify from 'vuetify';

// app
import Layout from './Layout';
import {floors, effects} from "./Layers";

// Setup font-awesome
library.add([faEye, faEyeSlash, faCog]);
Vue.component('i-fa', FontAwesomeIcon);
require('./styles.scss');

// Bootstrap App
Vue.prototype.$layers = [
  floors,
  effects,
];
Vue.prototype.$setActiveLayer = function(layer) {
  _.each(this.$layers, (layer)=>layer.setActive(false));
  layer.setActive(true);
  this.$activeLayer = layer;
}
Vue.prototype.$setActiveLayer(floors)

new Vue({
  el: "#app",
  components: {
    Layout
  },
  template: '<Layout />'
});
