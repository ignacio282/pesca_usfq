import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Media from "../views/Media.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/media",
    name: "Media",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    component: Media
  },
  {
    path: "/secundaria",
    name: "Secundaria",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Secundaria.vue")

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
