import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Splashscreen from './components/Splashscreen.vue'
import Vuecarousel from 'vue-carousel'

Vue.use(VueRouter)
Vue.use(Vuecarousel)


const routes = [
  { path: '/home', component: Home },
  { path: '/', component: Splashscreen}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
