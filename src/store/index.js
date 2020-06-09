import Vue from 'vue'
import Vuex from 'vuex'

import usersApi from '../api/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user')) || {}
  },
  mutations: {
    LOGIN: (state, {token, user}) => {
      state.token = token
      state.user = user
    },
    LOGOUT: state => {
      state.token = ''
      state.user = {}
    }
  },
  actions: {
    login({commit, dispatch}, {mail, password}) {
      return new Promise((resolve) => {
        usersApi.postLogin(mail, password)
            .then(resp => {
              if(!resp.Error) {
                localStorage.setItem('token', resp.token)
                localStorage.setItem('user', JSON.stringify(resp.user))
                commit('LOGIN', resp)
                resolve(resp)
              }
              else {
                dispatch('logout')
                resolve(resp)
              }
            })
      })
    },
    logout({commit}) {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      commit('LOGOUT')
    }
  },
  getters: {
    isLogged: state => !!state.token,
    user: state => state.user
  }
})
