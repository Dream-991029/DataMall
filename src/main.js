import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/icon';
import './assets/lodash.min.js';
import axios from 'axios'
import VueAxios from "vue-axios";
import store from "@/store/store";


import VueParticles from "vue-particles";
Vue.use(VueParticles)
Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.config.productionTip = false



axios.defaults.baseURL = 'http://192.168.2.136:8000/';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
