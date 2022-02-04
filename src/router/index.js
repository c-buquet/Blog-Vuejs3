import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue'
import Modify from '@/components/Modify.vue'
import Add from '@/components/Add.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  }, {
    name: 'Modify',
    path: '/modify',
    component: Modify
  }, {
    name: 'Add',
    path: '/add',
    component: Add
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;