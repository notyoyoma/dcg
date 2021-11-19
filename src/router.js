import { createRouter, createWebHistory } from "vue-router";
import Game from "./Game";

const isDevEnv = process.env.NODE_ENV === "development";

const gameRoute = {
  path: "/",
  name: "Game",
  component: Game,
};

export async function buildRouter() {
  let routes;
  if (isDevEnv) {
    const { adminRoutes } = await import("./admin/routes");
    routes = [gameRoute, ...adminRoutes];
  } else {
    routes = [gameRoute];
  }

  return createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
}
