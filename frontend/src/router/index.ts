import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: async (to, from, savedPosition) => {
    if (savedPosition) return savedPosition
    await nextTick()
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },

    { path: '/rolam', name: 'about', component: () => import('../views/AboutView.vue') },
    { path: '/about', redirect: '/rolam' },

    {
      path: '/referenciak',
      name: 'references',
      component: () => import('../views/ReferencesView.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
