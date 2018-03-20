const TOGGLE_PHOTO_SHOW = 'TOGGLE_PHOTO_SHOW'
const SET_PHOTO = 'SET_PHOTO'
const TOGGLE_PHOTO_LOAD = 'TOGGLE_PHOTO_LOAD'
const TOGGLE_TORRENT_SHOW = 'TOGGLE_TORRENT_SHOW'
const ADD_TORRENT = 'ADD_TORRENT'
const TOGGLE_TORRENT_LOAD = 'TOGGLE_TORRENT_LOAD'
const TOGGLE_BTSOW_SHOW = 'TOGGLE_BTSOW_SHOW'
const ADD_BTSOW = 'ADD_BTSOW'
const TOGGLE_BTSOW_LOAD = 'TOGGLE_BTSOW_LOAD'

export default {
  //  dmm
  [TOGGLE_PHOTO_SHOW] (state) {
    state.photoModalShow = !state.photoModalShow
  },
  [SET_PHOTO] (state, payload) {
    state.photos = {...payload}
  },
  [TOGGLE_PHOTO_LOAD] (state) {
    state.photoLoading = !state.photoLoading
  },
  //  torrentkitty
  [TOGGLE_TORRENT_SHOW] (state) {
    state.torrentModalShow = !state.torrentModalShow
  },
  [ADD_TORRENT] (state, payload) {
    if (payload instanceof Array) {
      state.torrents = [...state.torrents, ...payload]
    } else {
      state.torrents.push(payload)
    }
  },
  [TOGGLE_TORRENT_LOAD] (state) {
    state.torrentLoading = !state.torrentLoading
  },
  //  btsow
  [TOGGLE_BTSOW_SHOW] (state) {
    state.btsowModalShow = !state.btsowModalShow
  },
  [ADD_BTSOW] (state, payload) {
    if (payload instanceof Array) {
      state.btsows = [...state.btsows, ...payload]
    } else {
      state.btsows.push(payload)
    }
  },
  [TOGGLE_BTSOW_LOAD] (state) {
    state.btsowLoading = !state.btsowLoading
  }
}
