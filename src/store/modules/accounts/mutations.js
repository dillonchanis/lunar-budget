import * as types from './mutation-types'

export default {
  [types.ADD_ACCOUNT] ({ accounts }, account) {
    accounts.push(account)
  }
}
