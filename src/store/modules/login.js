import { signIn } from '../../api/login'

let login = {
  namespaced: true,
  state: {
    user: sessionStorage.getItem('user'),
    loading: false
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state) {
      state.loading = !state.loading
    }
  },

  actions: {
    login ({ commit }, payload) {
      commit('setLoading')
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
    }
  }
}

export default login
