import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let _api = axios.create({
  baseURL: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity",
})

const apiQuery = "photos?api_key=uGzq2jDTMzsS1q3VfhsMy5cVIuKFemzzjKMKqkNC&earth_date="
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResults: {}
  },
  mutations: {
    setSearchResults(state, searchResults) {
      state.searchResults = searchResults
    }
  },
  actions: {
    async searchNasaApi({ commit, dispatch }, query) {
      let res = await _api.get(apiQuery + query)
      commit("setSearchResults", res.data.photos)
      console.log("from store", this.state.searchResults[0]);

    }
  },
  modules: {
  }
})
