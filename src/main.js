import { createApp } from "vue";

import Main from "./Main";
import store from "./store";

import "./icons";

const app = createApp(Main);

app.component("admin-nav", { template: `<span></span>` });

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import KeyPress from "@/components/interaction/KeyPress";
import KeyButton from "@/components/interaction/KeyButton";
app.component("i-fa", FontAwesomeIcon);
app.component("KeyPress", KeyPress);
app.component("KeyButton", KeyButton);

app.use(store);
import router from "./router";
app.use(router);
app.mount("#app");

window.app = app;
