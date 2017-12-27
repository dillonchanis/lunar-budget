import Accounts from '../Accounts'
import AccountForm from '../AccountForm'

export default [
  {
    path: '/accounts',
    component: Accounts,
    name: 'accounts',
    meta: {
      guest: false,
      needsAuth: true
    }
  },
  {
    path: '/accounts/add',
    component: AccountForm,
    name: 'account-form',
    meta: {
      guest: false,
      needsAuth: true
    }
  }
]
