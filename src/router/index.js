import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../modules/home/views/Home.vue'
import page404 from '../views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => page404
    },
  ]
})

export default router
