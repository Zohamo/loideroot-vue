import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoiDeRootView from '@/views/LoiDeRootView.vue'
import LoiDeRootSectionView from '@/views/LoiDeRootSectionView.vue'
import FactionsPreviewView from '@/views/FactionsPreviewView.vue'
import FactionDetailView from '@/views/FactionDetailView.vue'

export default createRouter({
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
      path: '/loi-de-root/:id',
      name: 'loi-de-root-section',
      component: LoiDeRootSectionView,
    },
    {
      path: '/factions',
      name: 'factions',
      component: FactionsPreviewView,
    },
    {
      path: '/factions/:slug',
      name: 'faction-detail',
      component: FactionDetailView,
    },
  ],
})
