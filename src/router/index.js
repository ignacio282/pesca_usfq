import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Media from "../views/Media.vue";
import Menu from "../views/Menu.vue";

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
    path: "/menu",
    name: "Menu",
    component: Menu
  },
  {
    path: "/secundaria",
    name: "Secundaria",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Secundaria.vue")

  }
  ,
  {
    path: "/noticias",
    name: "News",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/Noticias.vue")

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
