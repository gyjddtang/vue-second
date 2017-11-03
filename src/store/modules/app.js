/**
 * Created by Mili on 2017/11/2.
 */

let app = {
  namespaced: true,
  state: {
    visitedViews: []
  },
  mutations: {
    SAVE (state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {
    addVisited ({ commit, state }, payload) {
      if (!state.visitedViews.some(ele => ele === payload)) {
        commit('SAVE', {
          visitedViews: [ ...state.visitedViews, payload ]
        })
      }
    },

    delVisited ({ commit, state }, payload) {
      for (const [index, ele] of state.visitedViews.entries()) {
        if (ele === payload) {
          let _temp = [ ...state.visitedViews ]
          _temp.splice(index, 1)
          commit('SAVE', {
            visitedViews: _temp
          })
          break
        }
      }
    }
  }
}

export default app
