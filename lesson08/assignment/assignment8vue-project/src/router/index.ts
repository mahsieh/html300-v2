import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Accordion from '../views/AccordionView.vue'
import Images from '../views/ImagesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    { /*define the subsequent routes for additional pages*/
      path: '/accordion',
      name: 'accordion',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AccordionView.vue')
    },
    {
      path: '/images',
      name: 'images',
      component: () => import('../views/ImagesView.vue')
    }
  ]
})

export default router
