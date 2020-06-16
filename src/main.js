import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import 'popper.js';
import './assets/css/app.scss';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/app.scss'

import VideoBackground from 'vue-responsive-video-background-player'



Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.component('Sidebar', require('./components/sidebar.vue').default);
Vue.component('video-background', VideoBackground);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
