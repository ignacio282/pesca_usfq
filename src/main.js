import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import './assets/app.scss';

Vue.component('Sidebar',require('./components/sidebar.vue').default);  
Vue.component('Footer',require('./components/Footer.vue').default);
Vue.component('NavBar',require('./components/NavBar.vue').default);  



Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
