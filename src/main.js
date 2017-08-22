// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Header from '../src/components/header'
import routes from './router'

// Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('headers', Header)
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
