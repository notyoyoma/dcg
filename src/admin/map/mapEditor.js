// app

import { storeConf } from "./Store";

// Setup Vue globals

// Bootstrap App
const store = new Vuex.Store(storeConf);

axios.get("/data/map.json").then(({ data }) => {
  store.commit("initMapData", data);
  store.commit("setFloor", 0);
  store.commit("setCurrentLayer", "floors");
});

export default {};
