import * as types from './mutation-types'

export const addAccount = ({ commit }, account) => {
  commit(types.ADD_ACCOUNT, account)
}
