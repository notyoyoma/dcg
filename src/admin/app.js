import Menu from './Menu';
import mapEditor from './map';
require('./styles.scss')

const routes = {
  '/admin/map': mapEditor
}

// Initialize app
new Vue({
  el: "#app",
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || Menu
    }
  },
  render (h) { return h(this.ViewComponent) }
});
