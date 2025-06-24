import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoiDeRootView from '../views/LoiDeRootView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/loi-de-root',
      name: 'loi-de-root',
      component: LoiDeRootView,
    },
    {
      path: '/loi-de-root/:id/:slug?',
      component: () => import('../views/LoiDeRootSectionView.vue'),
    },
    {
      path: '/factions/:slug?',
      component: () => import('../views/FactionView.vue'),
    },
  ],
})

export default router
