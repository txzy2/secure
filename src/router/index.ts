import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/ContactsView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
});

export default router;
