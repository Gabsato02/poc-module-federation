import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/project-1',
      name: 'project1',
      component: () => import('project1/App'),
    },
    {
      path: '/project-2',
      name: 'project2',
      component: () => import('project2/App'),
    },
  ],
})

export default router;
