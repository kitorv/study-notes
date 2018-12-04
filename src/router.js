import Vue from "vue"
import Router from "vue-router"
import routeList from "@/setting"

Vue.use(Router)

let children = []
let firtPath = null
routeList.forEach(({ path }) => {
  if (!path) return
  let pathArray = path.split(".")
  pathArray.pop()
  let url = pathArray.join("")
  if (!firtPath) {
    firtPath = url
  }
  children.push({
    path: url,
    name: url,
    component: () => import(`.${path}`)
  })
})
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
      redirect: firtPath,
      component: () => import("@/views/home.vue"),
      children: children
    }
  ]
})
