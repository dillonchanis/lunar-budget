import Budgets from '../Budgets'

export default [
  {
    path: '/budgets',
    component: Budgets,
    name: 'budgets',
    meta: {
      guest: false,
      needsAuth: true
    }
  }
]
