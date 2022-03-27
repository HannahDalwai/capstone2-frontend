import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import about from '../views/About.vue'
import login from '../views/Login.vue'
import register from '../views/Register.vue'
import DashBoard from '@/views/DashBoard.vue'
import Profile from '@/views/Profile.vue'
import blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'
import BlogDetails from '../views/BlogDetails.vue'
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
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/dashboard/:id',
    name: 'Profile',
    component: Profile,
    props: true
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
    path: '/create',
    name: 'CreateBlog',
    component:CreateBlog
  },
  ,
  {
    path: '/contact',
    name: 'Contact',
    component:Contact
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