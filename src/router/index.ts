import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    redirect: "/internet/work"
  },
  {
    path: "/index",
    component: () => import("@/views/index.vue"),
    children: [
      {
        path: "/internet/work",
        component: () => import("../../notes/internet/01-work.md")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
