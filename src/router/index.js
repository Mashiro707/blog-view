/* eslint-disable no-dupe-keys */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@/views/index/Index.vue')
      },
      {
        path: 'article/:id',
        name: 'article',
        component: () => import('@/views/article/Article.vue')
      }
    ]
  }
]

const createRouter = () => new Router({
  mode: 'history',
  routes
})

const router = createRouter()

export default router
