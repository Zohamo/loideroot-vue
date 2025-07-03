import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoiDeRootView from '../views/LoiDeRootView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/loi-de-root',
      name: 'loi-de-root',
      component: LoiDeRootView,
    },
    {
      path: '/loi-de-root/:id/:slug?',
      name: 'loi-de-root-section',
      component: () => import('../views/LoiDeRootSectionView.vue'),
    },
    {
      path: '/factions',
      name: 'factions',
      component: () => import('../views/FactionsPreviewView.vue'),
    },
    {
      path: '/factions/:slug',
      name: 'faction-detail',
      component: () => import('../views/FactionDetailView.vue'),
    },
  ],
})

export default router
