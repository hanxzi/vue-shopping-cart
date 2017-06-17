import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import address from '@/components/address'
import shoppingCart from '@/components/shoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    },
    {
      path: '/address',
      name: 'address',
      component: address
    }
  ]
})
