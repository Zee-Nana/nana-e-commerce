import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    // name: 'Users',
    component: Users
  },
  {
    path: '/product/:id-:title',
    name: 'Product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
