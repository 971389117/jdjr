import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/index.vue'
import Ious from './components/ious/index'
import Raise from './components/raise/index'
import Download from './components/special/download'
import Money from './components/money/index'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ious',
      name: 'ious',
      component: Ious
    },
    {
      path: '/raise',
      name: 'raise',
      component: Raise
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/money',
      name: 'money',
      component: Money
    },

  ]
})
