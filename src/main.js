import Layout from './Layout';
import views from './views';

const gameData = {};

Layout.on('initialised', ()=>{
  new Vue({
    el: ".lm_goldenlayout.lm_root",
    components: {
      ...views
    },
  });
});
