import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'
// import { reject, resolve } from 'core-js/fn/promise'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    user: null
  },
  getters: {

  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setToken (state, token) {
      state.token = token
    }
  },
  actions: {
    LOGIN: () => {
      return new Promise((resolve, reject) => {})
    }
  },
  modules: {
  }
})
