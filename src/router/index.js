import Vue from 'vue'
import VueRouter from 'vue-router'
import Usuarios from '../views/UsuariosView.vue'
import Post from '../views/PostView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UsuariosView',
    component: Usuarios
  },
  {
    path: '/post',
    name: 'PostView',
    component: Post
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
