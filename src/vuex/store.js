import Vuex from 'vuex'
import Vue from 'vue'
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
  mutations: {
    togglePhotoShow (state) {
      state.photoModalShow = !state.photoModalShow
    },
    setPhotos (state, payload) {
      state.photos = {...payload}
    },
    togglePhotoLoading (state) {
      state.photoLoading = !state.photoLoading
    },
    toggleTorrentShow (state) {
      state.torrentModalShow = !state.torrentModalShow
    },
    addTorrents (state, payload) {
      if (payload instanceof Array) {
        state.torrents = [...state.torrents, ...payload]
      } else {
        state.torrents.push(payload)
      }
    },
    toggleTorrentLoading (state) {
      state.torrentLoading = !state.torrentLoading
    },
    toggleBtsowShow (state) {
      state.btsowModalShow = !state.btsowModalShow
    },
    addBtsows (state, payload) {
      if (payload instanceof Array) {
        state.btsows = [...state.btsows, ...payload]
      } else {
        state.btsows.push(payload)
      }
    },
    toggleBtsowLoading (state) {
      state.btsowLoading = !state.btsowLoading
    }
  }
})
export default store
