/**
 * Created by Mili on 2017/10/30.
 */

import { getList } from '../../api/anchor'

let anchor = {
  namespaced: true,
  state: {
    dataList: [],
    dataTotal: 0
  },

  mutations: {
    SAVE (state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    }
  },

  actions: {
    getList ({ commit }, payload) {
      getList(payload)
        .then(({ additionalProperties, data, succeed, msg }) => {
          if (succeed) {
            commit('SAVE', {
              dataList: data,
              dataTotal: additionalProperties.page.totalCount
            })
          } else {
            commit('SAVE', {
              dataList: []
            })
          }
        })
    }
  }
}

export default anchor

