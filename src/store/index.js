import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    photos: {
      isSuccess: false,
      result: ''
    },
    photoModalShow: false,
    photoLoading: true,
    torrents: [],
    torrentModalShow: false,
    torrentLoading: true,
    btsows: [],
    btsowModalShow: false,
    btsowLoading: true
  },
  mutations
})
export default store
