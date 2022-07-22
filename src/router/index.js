import * as VueRouter from 'vue-router'

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
        path: 'article',
        name: 'article',
        component: () => import('@/views/article/Article.vue')
      }
    ]
  }
]

const createRouter = () =>
  VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
  })

const router = createRouter()

export default router
