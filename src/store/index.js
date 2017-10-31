import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'
import anchor from './modules/anchor'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login,
    anchor
  }
})

export default store
