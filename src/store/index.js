import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: localStorage.getItem('user') || null
  },
  mutations: {
    LOGIN: (state, user) => {
      state.user = user
    },
    LOGOUT: state => {
      state.user = null
    }
  },
  actions: {
    login({commit}, username) {
      localStorage.setItem('user', username)
      commit('LOGIN', username)
      return true
    },
    logout({commit}) {
      localStorage.removeItem('user')
      commit('LOGOUT')
    }
  },
  getters: {
    isLogged: state => !!state.user,
    user: state => state.user
  }
})
