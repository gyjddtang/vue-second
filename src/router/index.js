import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import App from '../views/layout/MainLayout'
import Err404 from '../views/404'
import Anchor from '../views/Anchor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/app',
      name: 'App',
      redirect: '/app/anchor',
      component: App,
      children: [
        {
          path: 'anchor',
          name: 'Anchor',
          component: Anchor
        },
        {
          path: '*',
          name: '404',
          component: Err404
        }
      ]
    },
    {
      path: '*',
      name: 'Err404',
      component: Err404
    }
  ]
})
