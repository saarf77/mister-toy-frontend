import { createStore } from 'vuex'
import toysStore from './modules/toy-module.js'

// create a store instance
const store = createStore({
  strict: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    toyStore: toysStore,
  },
})

export default store
