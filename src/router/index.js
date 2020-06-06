import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ClientLogin from "../views/ClientLogin";
import Dashboard from "../views/Dashboard";

Vue.use(VueRouter)

  const routes = [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
    {
      path: '/ClientLogin',
      name: 'ClientLogin',
      component: ClientLogin
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
]

const router = new VueRouter({
  routes
})

export default router
