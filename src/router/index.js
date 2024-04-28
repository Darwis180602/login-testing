import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/page',
    name: 'Page',
    component: () => import(/* webpackChunkName: "page" */ '../views/Page.vue')
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router