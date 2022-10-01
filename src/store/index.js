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
            resolve(true)
          }
        }).catch(err => {
          console.error(err)
          reject(err)
        })
      })
    },
    REGISTER: ({ commit }, { firstName, lastName, email, password, phoneNumber }) => {
      return new Promise((resolve, reject) => {
        axios.post('http://192.168.100.14:8000/api/user/register', { firstName, lastName, email, password, phoneNumber }).then((data, status) => {
          console.log(status)
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
