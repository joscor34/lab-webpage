import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const baseurl = 'http://localhost:8080/api/'

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
    LOGIN: ({ commit }, { email, password }) => {
      return new Promise((resolve, reject) => {
        axios.post(baseurl + 'user/login', { email, password }).then((data, status) => {
          if (status === 200) {
            this.$cookies.set('token', data.data.token)
            resolve(true)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    REGISTER: ({ commit }, { firstName, lastName, email, password, phoneNumber }) => {
      return new Promise((resolve, reject) => {
        axios.post(baseurl + 'user/login', { firstName, lastName, email, password, phoneNumber }).then((data, status) => {
          if (status === 200) {
            resolve(true)
          }
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  modules: {
  }
})
