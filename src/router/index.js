import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue'
import Modify from '@/components/Modify.vue'
import Add from '@/components/Add.vue'
import NotFound from '@/components/Notfound.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  }, {
    name: 'Modify',
    path: '/modify/:name',
    component: Modify,
    props: true,
  }, {
    name: 'Add',
    path: '/add',
    component: Add
  }, {
    name: 'Notfound',
    path: '/:pathMatch(.*)',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router;