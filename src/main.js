// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import axios from 'axios'
Vue.http = Vue.prototype.$http = axios;
import mock from '../mock/index'   //全局引入mock

Vue.config.productionTip = false

Vue.use(ElementUI);



new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
