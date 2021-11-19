import { createApp } from "vue";

import Main from "./Main";
import store from "./store";

const isDevEnv = process.env.NODE_ENV === "development";

const app = createApp(Main);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import KeyPress from "./interaction/KeyPress";
import { buildRouter } from "./router";
app.component("i-fa", FontAwesomeIcon);
app.component("KeyPress", KeyPress);

app.use(store);

(async function setupAndMount() {
  if (isDevEnv) {
    await import("./admin/setup").then(({ setup }) => setup(app));
  }
  const router = await buildRouter();
  app.use(router);

  app.mount("#app");
})();
