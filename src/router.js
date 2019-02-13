import Vue from "vue";
import Router from "vue-router";
import { routes } from "./setting";

Vue.use(Router);

let children = [];
routes.forEach(({ path }) => {
  if (!path) return;
  let url = path.replace(/@/, "").replace(/.(md|vue)$/, "");
  children.push({
    path: url,
    name: url,
    component: () => import(`.${path.replace(/@/, "")}`)
  });
});
let firstRoute = { path: "/", name: "notes", component: children[0].component };
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [firstRoute, ...children]
});
