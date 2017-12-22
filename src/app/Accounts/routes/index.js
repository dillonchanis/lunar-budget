import Accounts from '../Accounts'

export default [
  {
    path: '/accounts',
    component: Accounts,
    name: 'accounts',
    meta: {
      guest: false,
      needsAuth: true
    }
  }
]
