import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from "../views/Dashboard";
import store from '../store'
import Login from "../views/Login";
import Products from "../views/Products";
import CGU from "../views/CGU"

Vue.use(VueRouter)

  const routes = [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Products',
      name: 'Products',
      component: Products
    },
    {
      path: '/CGU',
      name: 'CGU',
      component: CGU
    },
    {
      path: '*',
      redirect: '/'
    }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(store.getters.isLogged) {
      next()
      return
    }
    next('/')
  }
  else {
    next()
  }
})

export default router
