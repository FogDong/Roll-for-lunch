import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Fail from '@/components/Fail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/guna',
      name: 'Fail',
      component: Fail
    }
  ]
})
