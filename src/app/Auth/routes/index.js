import Login from '../Login'
import Register from '../Register'

export default [
  {
    path: '/login',
    component: Login,
    name: 'login',
    meta: {
      guest: true,
      needsAuth: false
    }
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
    meta: {
      guest: true,
      needsAuth: false
    }
  }
]
