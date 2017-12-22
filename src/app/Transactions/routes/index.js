import Transactions from '../Transactions'

export default [
  {
    path: '/transactions',
    component: Transactions,
    name: 'transactions',
    meta: {
      guest: false,
      needsAuth: true
    }
  }
]
