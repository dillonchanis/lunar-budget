import Dashboard from '../Dashboard'

export default [
  {
    path: '/',
    component: Dashboard,
    name: 'dashboard',
    meta: {
      guest: false,
      needsAuth: true
    }
  }
]
