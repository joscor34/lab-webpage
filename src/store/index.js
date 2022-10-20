import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    user: '',
    admin: ''
  },
  getters: {
    isLoggedIn (state) {
      return !!state.token
    }
  },
  mutations: {
    setAdmin (state, admin) {
      state.admin = admin
    },
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
        axios.post('http://192.168.1.64:8000/api/user/login', { email, password }).then((data) => {
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
        axios.post('http://192.168.1.64:8000/api/admin/login', { email, password }).then((data) => {
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
    UPLOAD_FILE: ({ commit }, { userId, title, coordinador, keywords, abstract, authors, proyecto }) => {
      const bodyDataForm = new FormData()
      const datosColab = JSON.stringify(authors)
      console.log(datosColab)
      bodyDataForm.append('userId', userId)
      bodyDataForm.append('paper', 0)
      bodyDataForm.append('title', title)
      bodyDataForm.append('coordinador', coordinador)
      bodyDataForm.append('keywords', keywords)
      bodyDataForm.append('abstract', abstract)
      bodyDataForm.append('authors', JSON.stringify(authors))
      bodyDataForm.append('proyecto', proyecto)
      return new Promise((resolve, reject) => {
        const config = {
          headers: {
            Authorization: `Bearer ${Vue.$cookies.get('token')}`,
            'Content-Type': 'multipart/form-data'
          }
        }
        console.log(bodyDataForm)
        axios.post('http://192.168.1.64:8000/api/user/subir-archivo', bodyDataForm, config).then((data, status) => {
          if (!data) {
            console.log('Something is wrong')
            reject(data)
          } else {
            resolve(data)
          }
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },
    REGISTER: ({ commit }, { firstName, lastName, email, password, phoneNumber }) => {
      return new Promise((resolve, reject) => {
        axios.post('http://192.168.1.64:8000/api/user/register', { firstName, lastName, email, password, phoneNumber }).then((data, status) => {
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
    },
    GET_PROYECTS: ({ commit }) => {
      return new Promise((resolve, reject) => {
        const config = {
          headers: {
            Authorization: `Bearer ${Vue.$cookies.get('token')}`
          }
        }
        axios.get('http://192.168.1.64:8000/api/admin/proyectos', config).then((data) => {
          if (!data) {
            console.error('Something is wrong')
            reject(data)
          } else {
            resolve(data)
          }
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },
    GET_SINGLE_PROYECT: ({ commit }, { proyectId }) => {
      return new Promise((resolve, reject) => {
        const config = {
          headers: {
            Authorization: `Bearer ${Vue.$cookies.get('token')}`
          }
        }
        axios.post('http://192.168.1.64:8000/api/admin/proyecto', { proyectId }, config).then((data) => {
          if (!data) {
            console.error('Something is wrong')
            reject(data)
          } else {
            resolve(data)
          }
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    },
    ELIMINATE_PROYECT: ({ commit }, { proyectId }) => {
      return new Promise((resolve, reject) => {
        const config = {
          headers: {
            Authorization: `Bearer ${Vue.$cookies.get('token')}`
          }
        }
        axios.post('http://192.168.1.64:8000/api/admin/delProyect', { proyectId }, config).then((data) => {
          if (!data.data) {
            console.error('Something is wrong')
            reject(data)
          } else {
            resolve(data)
          }
        }).catch(error => {
          console.log(error)
          reject(error)
        })
      })
    }
  },
  modules: {
  }
})
