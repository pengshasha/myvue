// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Header from '../src/components/header'
import routes from './router'
import resource from 'vue-resource'
import vueStore from 'vuex'
import stores from './store/index'

// Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('headers', Header)
Vue.use(resource)
Vue.use(VueRouter)
Vue.use(vueStore)
const router = new VueRouter({
  mode: 'history',
  routes
})
const store = new vueStore.Store(stores)
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
