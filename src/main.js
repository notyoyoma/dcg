import { createApp } from "vue";

import Main from "./Main";
import store from "./store";
import router from "./router";

const isDevEnv = process.env === "development";

const app = createApp(Main);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import KeyPress from "./interaction/KeyPress";
app.component("i-fa", FontAwesomeIcon);
app.component("KeyPress", KeyPress);

app.use(store);
app.use(router);
app.mount("#app");

if (isDevEnv) {
  import("./admin/setup").then((setupAdmin) => setupAdmin(app));
}
