import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue'
import Modify from '@/components/Modify.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  }, {
    name: 'Modify',
    path: '/modify',
    component: Modify
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;