import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { useAuthStore } from '@/stores/authorization.js'

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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      beforeEnter: (to, from) => {
        const AuthStore = useAuthStore()
        const authLink = AuthStore.getSpotifyAuthLink
        console.log('requestURL', authLink)
        window.location.href = authLink
      },
      component: {
        template: '<div />',
      },
    },
    {
      path: '/login-callback',
      component: {
        template: '<div />',
      },
      beforeEnter: (to, from) => {
        console.log('login-callback', from)
        // Check if error

        // Security check PKCE
      },
    },
  ]
})

export default router
