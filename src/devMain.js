import { createApp } from "vue";

import Main from "./Main";
import store from "./admin/store";
import game from "./game";

import "./admin/icons";

const app = createApp(Main);

import AdminNav from "./admin/Nav";
app.component("admin-nav", AdminNav);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import KeyPress from "./interaction/KeyPress";
app.component("i-fa", FontAwesomeIcon);
app.component("KeyPress", KeyPress);

app.use(store);
import router from "./devRouter";
app.use(router);
app.mount("#app");

window.app = app;
window.store = store;
window.game = game;
