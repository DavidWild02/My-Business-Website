import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about-me",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutMe.vue")
  },
  {
    path: "/my-projects",
    component: () => import("../views/MyProjects.vue")
  },
  {
    path: "/contact",
    component: () => import("../views/Contact.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
