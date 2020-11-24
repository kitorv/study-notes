import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/index.vue"),
      children: [
        {
          path: "/",
          component: () => import("../../notes/internet/01-work.md")
        }
      ]
    }
  ]
});

export default router;
