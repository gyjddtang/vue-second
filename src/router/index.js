import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../views/Hello'
import Layout from '../views/layout/MainLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    }
  ]
})
