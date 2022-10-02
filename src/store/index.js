import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: ''
  },
  getters: {
    isLoggedIn (state) {
      return !!state.token
    }
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
        axios.post('http://192.168.100.14:8000/api/user/login', { email, password }).then((data) => {
          console.log(status)
          if (!data) {
            console.error('Something is wrong')
          } else {
            console.log(data.data.data.token)
            Vue.$cookies.set('token', data.data.data.token)
            resolve(data.data.data.token)
          }
        }).catch(err => {
          reject(err.response.data.error)
        })
      })
    },
    LOGIN_ADMIN: ({ commit }, { email, password }) => {
      return new Promise((resolve, reject) => {
        axios.post('http://192.168.100.14:8000/api/admin/login', { email, password }).then((data) => {
          console.log(status)
          if (!data) {
            console.error('Something is wrong')
          } else {
            console.log(data.data.data.token)
            Vue.$cookies.set('token', data.data.data.token)
            resolve(data.data.data.token)
          }
        }).catch(err => {
          reject(err.response.data.error)
        })
      })
    },
    REGISTER: ({ commit }, { firstName, lastName, email, password, phoneNumber }) => {
      return new Promise((resolve, reject) => {
        axios.post('http://192.168.100.14:8000/api/user/register', { firstName, lastName, email, password, phoneNumber }).then((data, status) => {
          console.log(status)
          if (!data || data.data.error === 'el email ya esta registrado') {
            console.error('Something is wrong')
            reject(data.data.error)
          } else {
            console.log(data)
            resolve(data)
          }
        }).catch(err => {
          reject(err.response.status)
        })
      })
    }
  },
  modules: {
  }
})
