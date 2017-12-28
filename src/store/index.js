import Vue from 'vue'
import Vuex from 'vuex'

import accounts from './modules/accounts'
import drawer from './modules/drawer'
import transactions from './modules/transactions'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    accounts,
    drawer,
    transactions,
    user
  }
})
