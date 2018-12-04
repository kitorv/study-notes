import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/home/plan",
      component: () => import("@/views/home.vue"),
      children: [
        {
          path: "/home/javascript-01",
          name: "plan",
          component: () => import("@/notes/test.md")
        },
        {
          path: "/home/plan",
          name: "plan",
          component: () => import("@/views/plan.vue")
        }
      ]
    }
  ]
})
