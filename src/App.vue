<template>
  <div id="app">
    <div id="button-group">
      <Button @click="openPhotoModal()" id="img-button" round plain :disabled="photoLoading" :type="photoLoading?'default':'success'">
        <template v-if="photoLoading">
          <i class="el-icon-loading"></i>
        </template>
        <template v-else>
          <i class="el-icon-search"></i>
        </template>
        image
      </Button>
      <Button @click="openTorrentModal()" id="torrent-button" round plain :disabled="torrentLoading" :type="torrentLoading?'default':'success'">
        <template v-if="torrentLoading">
          <i class="el-icon-loading"></i>
        </template>
        <template v-else>
          <i class="el-icon-search"></i>
        </template>
        TorrentKitty
      </Button>
      <Button @click="openBtsowModal()" id="btsow-button" round plain :disabled="btsowLoading" :type="btsowLoading?'default':'success'">
        <template v-if="btsowLoading">
          <i class="el-icon-loading"></i>
        </template>
        <template v-else>
          <i class="el-icon-search"></i>
        </template>
        BTSOW
      </Button>
    </div>
    <PhotoModal />
    <TorrentModal />
    <BtsowModal />
  </div>
</template>
<script>
import PhotoModal from './components/PhotoModal.vue'
import TorrentModal from './components/TorrentModal.vue'
import BtsowModal from './components/BtsowModal.vue'
import { Button } from 'element-ui'
export default {
  name: 'App',
  components: {Button, PhotoModal, TorrentModal, BtsowModal},
  computed: {
    photoLoading () {
      return this.$store.state.photoLoading
    },
    torrentLoading () {
      return this.$store.state.torrentLoading
    },
    btsowLoading () {
      return this.$store.state.btsowLoading
    }
  },
  methods: {
    openPhotoModal: function () {
      this.$store.commit('TOGGLE_PHOTO_SHOW')
    },
    openTorrentModal: function () {
      this.$store.commit('TOGGLE_TORRENT_SHOW')
    },
    openBtsowModal: function () {
      this.$store.commit('TOGGLE_BTSOW_SHOW')
    }
  }
}
</script>
<style>
#button-group{
  position: fixed;
  top: 3%;
  left: 50%;
  transform: translateX(-50%)
}
#img-button {
  padding: 5px 10px;
}
#torrent-button {
  padding: 5px 10px;
  margin-left: 5px;
}
#btsow-button {
  padding: 5px 10px;
  margin-left: 5px;
}
</style>
