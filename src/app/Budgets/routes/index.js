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
  // {
  //   path: '/accounts/:id',
  //   component: AccountDetail,
  //   name: 'account-detail',
  //   meta: {
  //     guest: false,
  //     needsAuth: true
  //   }
  // }
]
