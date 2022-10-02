import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogIn.vue'
import SignIn from '../views/SignIn.vue'
import LogInAdmin from '../views/LogInAdmin.vue'
import SubmitProject from '../views/SubmitProject.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/loginadmin',
    name: 'loginadmin',
    component: LogInAdmin
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/project-submission',
    name: 'project-submission',
    component: SubmitProject
  }
]

const router = new VueRouter({
  routes
})

export default router
