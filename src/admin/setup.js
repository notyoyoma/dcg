import "./icons";
import AdminNav from "./Nav";

export function setup(app) {
  window.app = app;
  app.component("admin-nav", AdminNav);
}
