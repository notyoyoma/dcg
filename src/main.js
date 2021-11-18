import { createApp } from "vue";

require("./styles/index.scss");

import Main from "./Main";
import store from "./store";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import KeyPress from "./interaction/KeyPress";

const isDevEnv = process.env === "development";

const app = createApp(Main).use(store).use(router).mount("#app");

app.component("i-fa", FontAwesomeIcon);
app.component("KeyPress", KeyPress);
app.filter("humanize", _.startCase);

if (isDevEnv) {
  import("./admin/setup").then((setupAdmin) => setupAdmin(app));
}
