import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '../views/LogIn.vue'
import SignIn from '../views/SignIn.vue'
import LogInAdmin from '../views/LogInAdmin.vue'
import SubmitProject from '../views/SubmitProject.vue'
import AdminPanel from '../components/adminPanelComp.vue'
import Proyect from '../components/proyectComp.vue'
import Papers from '../views/Papers.vue'
import PageNotFound from '../views/PageNotFound.vue'
import jwtDecode from 'jwt-decode'

Vue.use(VueRouter)

function guardMyroute (to, from, next) {
  if (!Vue.$cookies.get('token')) {
    next('/login')
  } else {
    next()
  }
}

function guardMyAdmin (to, from, next) {
  const decodeToken = jwtDecode(Vue.$cookies.get('token'))
  if (decodeToken.userType === 1) {
    next()
  } else {
    next('/*')
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    beforeEnter: guardMyroute,
    component: SubmitProject
  },
  {
    path: '/admin-panel',
    name: 'admin-panel',
    beforeEnter: guardMyAdmin,
    component: AdminPanel
  },
  {
    name: 'proyecto',
    path: '/admin-panel/proyectos/:id',
    beforeEnter: guardMyAdmin,
    component: Proyect
  },
  {
    name: 'articulos',
    path: '/articulos',
    component: Papers
  },
  {
    path: '/*',
    name: 'PageNotFound_Error404',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
