import { signIn } from '../../api/login'
import { _import } from '../../router/load'
import { asyncRouter } from '../../router/index'
let login = {
  namespaced: true,
  state: {
    user: sessionStorage.getItem('user'),
    loading: false,
    addRoutes: [
      {
        path: '/app',
        redirect: 'app/anchor',
        component: _import('layout/MainLayout'),
        children: asyncRouter
      }
    ]
  },

  mutations: {
    SAVE (state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    }
  },

  actions: {
    login ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        signIn(payload)
        .then(({ additionalProperties, data, succeed, msg }) => {
          if (succeed) {
            resolve({ additionalProperties, data })
          } else {
            reject(msg)
          }
        })
      })
    },

    setLoading ({ commit }, payload) {
      commit('SAVE', {
        loading: payload
      })
    }
  }
}

export default login
