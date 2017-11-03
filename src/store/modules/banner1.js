/**
 * Created by Mili on 2017/11/2.
 */

import { getList } from '../../api/banenr1'

let banner1 = {
  namespaced: true,
  state: {
    listData: [],
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
              listData: data,
              dataTotal: additionalProperties.page.totalCount
            })
          }
        })
    }
  }
}

export default banner1
