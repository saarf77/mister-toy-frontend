import { toyService } from '../../services/toy-service'

export default {
  state: {
    toys: null,
    filterBy:{
      name:'',
      label:[],
      sort:'none',
      inStock:false
    }
  },
  getters: {
    toys(state) {
      return state.toys
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    setFilter(state,{filterBy}){
      state.filterBy = filterBy
    },
    removeToy(state, { _id }) {
      const idx = state.toys.findIndex((toy) => toy._id === _id)
      state.toys.splice(idx, 1)
    },
    saveToy(state, { toy }) {
      const idx = state.toys.findIndex((currToy) => currToy._id === toy._id)
      if (idx !== -1) state.toys.splice(idx, 1, toy)
      else state.toys.push(toy)
    },
  },
  actions: {
    loadToys({ commit,state }) {
      toyService.query(state.filterBy).then((toys) => {
        commit({ type: 'setToys', toys })
      })
    },
    setFilter({ commit,dispatch },{filterBy}) {
      commit({ type: 'setFilter', filterBy})
      dispatch({ type: 'loadToys' })
    },
    removeToy({ commit }, { _id }) {
      toyService.remove(_id).then(() => {
        commit({ type: 'removeToy', _id })
      })
    },
    saveToy({ commit }, { toy }) {
      toyService.save(toy).then((toy) => {
        commit({ type: 'saveToy', toy })
      })
    },
  },
}
