import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   state: {
       count: 0,
       list: {}
   },
    getters: {
       getCount: function (state) {
          return state.count
      }
    },
    mutations: {
       changeCount: function (state, count) {
           state.count = count
       },
        changeList: function (state, list) {
            state.list = list
        }
    },
    actions: {
        changeCount (context, count) {
            context.commit('changeCount', count)
        }
    }
})
