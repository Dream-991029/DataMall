import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login/Login'
import Details from "@/views/Details";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  }
]

const router = new VueRouter({
  routes
})

export default router
