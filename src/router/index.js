import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import about from '../views/About.vue'
import login from '../views/Login.vue'
import register from '../views/Register.vue'
import profile from '../views/Profile.vue'
import blog from '../views/Blog.vue'
import BlogDetails from '../views/BlogDetails.vue'
import NotFound from '../views/NotFound.vue'
import Admin from '../views/Admin.vue'
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
    name: 'blog',
    component: blog
  }
  ,
  {
    path: '/blog/:id',
    name: 'BlogDetails',
    component: BlogDetails,
    props: true
  }
  ,
  {
    path: '/admin',
    name: 'admin',
    component:Admin
  },
  {
    path: '/create',
    name: 'CreateBlog',
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