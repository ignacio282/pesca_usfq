import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import './plugins/bootstrap-vue'

import App from "./App.vue";
import router from "./router";

import AudioVisual from 'vue-audio-visual'
Vue.use(AudioVisual)

import scrollAnimation from './directives/scrollanimation'
Vue.directive('scrollanimation',scrollAnimation);



import 'popper.js';
import './assets/css/app.scss';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import VideoBackground from 'vue-responsive-video-background-player'


Vue.component('video-background', VideoBackground);
Vue.component('Footer',require('./components/Footer.vue').default);
Vue.component('NavBar',require('./components/NavBar.vue').default); 


import VueKinesis from 'vue-kinesis'

Vue.use(VueKinesis)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook)
library.add(faInstagram)
library.add(faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false;
Vue.config.devtools = true;


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
