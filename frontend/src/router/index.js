import Vue from 'vue'
import Router from 'vue-router'
import Dash from '@/components/Dash'
import Home from '@/components/views/Home'
import PageNotFound from '@/components/PageNotFound'
import RegisterForm from '@/components/RegisterForm'
import User from '@/components/User'
import About from '@/components/views/About'

/*admin*/
import Dashboard from '@/components/admin/Dashboard'
import Login from '@/components/admin/Login'

/*admin authors*/
import AdminAuthors from '@/components/admin/authors/index'
import AuthorCreate from '@/components/admin/authors/create'
import AuthorEdit from '@/components/admin/authors/edit'


/*end admin*/


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dash',
      component: Dash,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },
      ]
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/admin/authors',
          name: 'AdminAuthors',
          component: AdminAuthors,
        },
        {
          path: '/admin/author/create',
          name: 'AuthorCreate',
          component: AuthorCreate,
        },
        {
          path: '/admin/author/edit/:id',
          name: 'AuthorEdit',
          component: AuthorEdit,
        },

        
      ]
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'RegisterForm',
      component: RegisterForm
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '*',
      name: 'PageNotFound ',
      component: PageNotFound 
    },
  ]
})
