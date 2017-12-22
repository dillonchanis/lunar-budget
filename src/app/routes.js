import auth from './Auth/routes'
import dashboard from './Dashboard/routes'
import accounts from './Accounts/routes'
import transactions from './Transactions/routes'

export default [
  ...auth,
  ...dashboard,
  ...accounts,
  ...transactions
]
