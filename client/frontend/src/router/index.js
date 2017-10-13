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

/*admin genres*/
import AdminGenres from '@/components/admin/genres/index'
import GenreCreate from '@/components/admin/genres/create'
import GenreEdit from '@/components/admin/genres/edit'

/*admin books*/
import AdminBooks from '@/components/admin/books/index'
import BookCreate from '@/components/admin/books/create'
import BookEdit from '@/components/admin/books/edit'

/*admin customers*/
import AdminCustomers from '@/components/admin/customers/index'
import CustomerCreate from '@/components/admin/customers/create'
import CustomerEdit from '@/components/admin/customers/edit'

/*admin orders*/
import AdminOrders from '@/components/admin/orders/index'

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
		{
		  path: '/register',
		  name: 'RegisterForm',
		  component: RegisterForm
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
        {
          path: '/admin/genres',
          name: 'AdminGenres',
          component: AdminGenres,
        },
        {
          path: '/admin/genre/create',
          name: 'GenreCreate',
          component: GenreCreate,
        },
        {
          path: '/admin/genre/edit/:id',
          name: 'GenreEdit',
          component: GenreEdit,
        },
		{
          path: '/admin/books',
          name: 'AdminBooks',
          component: AdminBooks,
        },
        {
          path: '/admin/book/create',
          name: 'BookCreate',
          component: BookCreate,
        },
        {
          path: '/admin/book/edit/:id',
          name: 'BookEdit',
          component: BookEdit,
        },
		{
          path: '/admin/customers',
          name: 'AdminCustomers',
          component: AdminCustomers,
        },
        {
          path: '/admin/customer/create',
          name: 'CustomerCreate',
          component: CustomerCreate,
        },
        {
          path: '/admin/customer/edit/:id',
          name: 'CustomerEdit',
          component: CustomerEdit,
        },
		{
          path: '/admin/orders',
          name: 'AdminOrders',
          component: AdminOrders,
        },
      ]
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: Login
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
