import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import about from '../views/about.vue'
import toyApp from '../views/toy-app.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/toy-edit.vue'
import dashboard from '../views/dashboard.vue'


const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/toy',
      name: 'toy-app',
      component: toyApp,
    },
    {
      path: '/toy/:_id',
      name: 'toy-details',
      component: toyDetails,
    },
    {
      path: '/toy/edit/:_id?',
      name: 'toy-edit',
      component: toyEdit,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
    },
  ],
})

export default router
