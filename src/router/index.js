import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView'
import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'
import RegisterView from '@/views/RegisterView'
// import RegisterView from '../views/RegisterView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pages/'
    },
    {
      path: '/pages',
      component: PagesView,
      children: [
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'login',
          name: 'LoginView',
          component: LoginView
        },
        {
          path: 'register',
          name: 'RegisterView',
          component: RegisterView
        }
      ]
    },
    {
      path: '*',
      redirect: '/pages/'
    }
  ]
})
