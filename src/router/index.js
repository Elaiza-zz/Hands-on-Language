import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import LoginView from '../auth/LoginView.vue'
import RegisterView from '../auth/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import LessonsView from '../views/system/LessonsView.vue'
import LevelView from '../views/system/LevelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
      meta: { requiresNoAuth: true }, // Restrict for logged-in users
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { requiresNoAuth: true }, // Restrict for logged-in users
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { requiresNoAuth: true }, // Restrict for logged-in users
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }, // Require authentication
    },
    {
      path: '/lessonView',
      name: 'lessonView',
      component: LessonsView,
      meta: { requiresAuth: true }, // Require authentication
    },
    {
      path: '/level',
      name: 'level',
      component: LevelView,
      meta: { requiresAuth: true }, // Require authentication
    },
   
  ],
})

// Add a global navigation guard
router.beforeEach((to, from, next) => {
  const refreshToken = localStorage.getItem('refresh_token')

  if (to.meta.requiresNoAuth && refreshToken) {
    // If the user is already logged in, redirect them to /home
    return next('/home')
  }

  if (to.meta.requiresAuth && !refreshToken) {
    // If the user is not logged in, redirect them to /login
    return next('/login')
  }

  // Allow navigation
  next()
})

export default router
