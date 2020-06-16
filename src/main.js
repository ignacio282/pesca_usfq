import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";
import router from "./router";

import 'popper.js';
import './assets/css/app.scss';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/app.scss';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.component('Footer',require('./components/Footer.vue').default);
Vue.component('NavBar',require('./components/NavBar.vue').default);  
o


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
