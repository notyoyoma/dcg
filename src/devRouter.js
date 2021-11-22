import { createRouter, createWebHistory } from "vue-router";
import Game from "./Game";
import adminRoutes from "./admin/routes";

const routes = [
  {
    path: "/",
    name: "Game",
    component: Game,
  },
  ...adminRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
