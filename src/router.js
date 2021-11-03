import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./views/About.vue"),
  },
  {
    path: "/about2",
    name: "About2",
    component: () => import("./views/About2.vue"),
  },
  {
    path: "*",
    name: "E404",
    component: () => import("./views/E404.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router