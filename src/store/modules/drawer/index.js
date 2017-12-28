import * as types from './mutation-types'

export default {
  namespaced: true,

  state: {
    component: null,
    open: false
  },

  getters: {
    isOpen (state) {
      return state.open
    },

    getComponent (state) {
      return state.component
    }
  },

  mutations: {
    [types.SET_COMPONENT] (state, component) {
      state.component = component
    },

    [types.TOGGLE] (state) {
      state.open = !state.open
    }
  },

  actions: {
    setComponent ({ commit }, component) {
      commit(types.SET_COMPONENT, component)
    },

    toggle ({ commit }) {
      commit(types.TOGGLE)
    }
  }
}
