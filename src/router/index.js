import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    component: () => import('@/views/Index.vue'),
  },
  {
    path: '/article',
    component: Layout,
    component: () => import('@/views/Article.vue'),
  },
]

const createRouter = () => new Router({
  mode: 'history',
  routes
})

const router = createRouter()

export default router
