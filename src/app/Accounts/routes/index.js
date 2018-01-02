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
