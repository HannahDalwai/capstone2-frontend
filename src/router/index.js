import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import about from '../views/About.vue'
import login from '../views/Login.vue'
import register from '../views/Register.vue'
import profile from '../views/Profile.vue'
import blogs from '../views/Blog.vue'
import NotFound from '../views/NotFound.vue'
import CreateBlog from '../views/CreateBlog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  }
  ,
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  }
  ,
  {
    path: '/blogs',
    name: 'blogs',
    component: blogs
  }
  ,
  {
    path: '/create',
    name: 'createblog',
    component:CreateBlog
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router