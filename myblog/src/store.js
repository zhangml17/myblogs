import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    countInc(state){
      state.count++
    }
  },
  actions: {

  }
})
