import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import './plugins/bootstrap-vue'
import './plugins/bootstrap-vue'
import App from "./App.vue";
import router from "./router";

import 'popper.js';
import './assets/css/app.scss';

import VideoBackground from 'vue-responsive-video-background-player'

Vue.component('video-background', VideoBackground);
Vue.component('Footer',require('./components/Footer.vue').default);
Vue.component('NavBar',require('./components/NavBar.vue').default); 


Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
