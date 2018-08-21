import Layout from './Layout';
import views from './views';
import Vue from "vue/dist/vue.js";

require('./styles/index.scss');

Layout.on('initialised', ()=>{
  new Vue({
    el: ".lm_goldenlayout.lm_root",
    components: {
      ...views
    },
  });
});
