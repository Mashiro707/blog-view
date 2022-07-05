/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    component: () => import('@/views/index/Index.vue')
  },
  {
    path: '/article',
    component: Layout,
    component: () => import('@/views/article/Article.vue')
  }
]

const createRouter = () => new Router({
  mode: 'history',
  routes
})

const router = createRouter()

export default router
