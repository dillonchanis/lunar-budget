import * as types from './mutation-types'

export default {
  [types.ADD_BUDGET] ({ budgets }, budget) {
    budgets.push(budget)
  }
}
