import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import api from '@/api/index.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Vuetify)
Vue.use(ElementUI);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.prototype.$axios = Axios
Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
