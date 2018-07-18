import Layout from './Layout';
import views from './views';

require('./styles/index.scss');

Layout.on('initialised', ()=>{
  new Vue({
    el: ".lm_goldenlayout.lm_root",
    components: {
      ...views
    },
  });
});
