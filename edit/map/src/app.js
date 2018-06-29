import Layout from './Layout';
require('./styles.scss');
new Vue({
  el: "#app",
  components: {
    Layout
  },
  template: '<Layout />'
});
