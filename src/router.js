import { createRouter, createWebHistory } from "vue-router";
import Game from "./Game";

const isDevEnv = process.env.NODE_ENV === "development";

const routes = [
  {
    path: "/",
    name: "Game",
    component: Game,
  },
];

if (isDevEnv) {
  import("./admin/routes").then((adminRoutes) => routes.concat(adminRoutes));
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
