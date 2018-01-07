import * as types from './mutation-types'

export const addBudget = ({ commit }, budget) => {
  commit(types.ADD_BUDGET, budget)
}
