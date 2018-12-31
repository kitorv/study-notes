import Vue from "vue";
import Router from "vue-router";
import { routes } from "./setting";

Vue.use(Router);

let children = [];
routes.forEach(({ path }) => {
  if (!path) return;
  let url = path.replace(/@/, "").replace(/.md$/, "");
  children.push({ path: url, name: url, component: () => import(`.${url}.md`) });
});
let firstRoute = { path: "/", name: "notes", component: children[0].component };
children.push({
  path: "/plan",
  name: "plan",
  component: () => import("@/views/plan.vue")
});

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [firstRoute, ...children]
});
