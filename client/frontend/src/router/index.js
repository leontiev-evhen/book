import Vue from 'vue'
import Router from 'vue-router'

import PageNotFound from '@/components/PageNotFound'


/*admin*/
import Layout from '@/components/admin/Layout'
import Login from '@/components/admin/Login'
import Dashboard from '@/components/admin/dashboard/index'

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

/*frontend*/
import Category from '@/components/views/Category'
import Book from '@/components/views/Book'
import RegisterForm from '@/components/views/RegisterForm'
import User from '@/components/views/User'
import About from '@/components/views/About'
import LayoutMain from '@/components/Layout'
import Home from '@/components/views/Home'
import Cart from '@/components/views/Cart'
import Success from '@/components/views/Success'

/*end frontend*/


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/~user11/book/admin/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/~user11/book/admin',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path: '/~user11/book/admin/authors',
          name: 'AdminAuthors',
          component: AdminAuthors,
        },
        {
          path: '/~user11/book/admin/author/create',
          name: 'AuthorCreate',
          component: AuthorCreate,
        },
        {
          path: '/~user11/book/admin/author/edit/:id',
          name: 'AuthorEdit',
          component: AuthorEdit,
        },
        {
          path: '/~user11/book/admin/genres',
          name: 'AdminGenres',
          component: AdminGenres,
        },
        {
          path: '/~user11/book/admin/genre/create',
          name: 'GenreCreate',
          component: GenreCreate,
        },
        {
          path: '/~user11/book/admin/genre/edit/:id',
          name: 'GenreEdit',
          component: GenreEdit,
        },
		    {
          path: '/~user11/book/admin/books',
          name: 'AdminBooks',
          component: AdminBooks,
        },
        {
          path: '/~user11/book/admin/book/create',
          name: 'BookCreate',
          component: BookCreate,
        },
        {
          path: '/~user11/book/admin/book/edit/:id',
          name: 'BookEdit',
          component: BookEdit,
        },
		    {
          path: '/~user11/book/admin/customers',
          name: 'AdminCustomers',
          component: AdminCustomers,
        },
        {
          path: '/~user11/book/admin/customer/create',
          name: 'CustomerCreate',
          component: CustomerCreate,
        },
        {
          path: '/~user11/book/admin/customer/edit/:id',
          name: 'CustomerEdit',
          component: CustomerEdit,
        },
		    {
          path: '/~user11/book/admin/orders',
          name: 'AdminOrders',
          component: AdminOrders,
        },
      ]
    },
     {
      path: '/~user11/book/',
      name: 'layout',
      component: LayoutMain,
      children: [
        {
          path: '',
          name: 'layout.Home',
          component: Home
        },
        {
          path: '/~user11/book/about',
          name: 'layout.About',
          component: About
        },
        {
          path: '/~user11/book/book/:id',
          name: 'layout.Book',
          component: Book
        },
        {
          path: '/~user11/book/:category/:id',
          name: 'layout.Category',
          component: Category
        },
        {
          path: '/~user11/book/register',
          name: 'layout.RegisterForm',
          component: RegisterForm
        },
        {
          path: '/~user11/book/user',
          name: 'layout.User',
          component: User
        },
        {
          path: '/~user11/book/cart',
          name: 'layout.Cart',
          component: Cart
        },
        {
          path: '/~user11/book/success',
          name: 'layout.Success',
          component: Success
        },
      ]
    },
    {
      path: '/~user11/book/user',
      name: 'User',
      component: User
    },
    {
      path: '*',
      name: 'PageNotFound ',
      component: PageNotFound 
    },
    {
      path: '/~user11/book/404',
      name: 'PageNotFound ',
      component: PageNotFound 
    },
  ]
})
