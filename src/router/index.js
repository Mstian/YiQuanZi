import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/quanzi',
    name: 'quanzi',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/quanzi.vue')
  },
  {
    path: '/bind',
    name: 'bind',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/bindFriend.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
