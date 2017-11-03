import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login'
import anchor from './modules/anchor'
import banner1 from './modules/banner1'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login,
    anchor,
    banner1,
    app
  }
})

export default store
