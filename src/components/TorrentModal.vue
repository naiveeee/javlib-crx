<template>
  <Dialog :visible.sync="show" top="10vh" :show-close="false" :close-on-click-modal="true" width="55%" id="torrent-modal">
    <div slot="title">
      <img src="https://www.torrentkitty.tv/images/ui/header-logo.png" width="40" height="30" style="position:relative;top:8px;">
      <a href="https://www.torrentkitty.tv" style="color: black;text-decoration: none;" target="view-window">
      TorrentKitty
      <i class="el-icon-view"></i>
      </a>
    </div>
    <TorrentWall />
 </Dialog>
</template>
<script>
import TorrentWall from './TorrentWall.vue'
import {Dialog} from 'element-ui'
export default {
  components: {
    TorrentWall,
    Dialog
  },
  computed: {
    show: {
      get: function () {
        return this.$store.state.torrentModalShow
      },
      set: function () {
        this.$store.commit('TOGGLE_TORRENT_SHOW')
      }
    }
  }
}
</script>
<style>
#torrent-modal .el-dialog__header {
  text-align: center;
  font-size: 23px;
  font-family: fantasy;
}
#torrent-modal .el-dialog__body {
  padding-top: 0px;
}
#torrent-modal .el-dialog {
  border: 1px solid white;
  border-radius: 20px;
  overflow: hidden;
  background: #deffa1 url("https://www.torrentkitty.tv/css/images/main-bg.png");
}
#torrent-modal .el-table{
  background-color: inherit;
}
#torrent-modal tr{
  background-color: inherit;
}
#torrent-modal th{
  background-color: inherit;
  padding: 5px 0px;
}
#torrent-modal td {
  border: none;
  padding: 8px 0px;
}
#torrent-modal .cell {
  text-align: center;
  white-space: nowrap;
}
#torrent-modal tr.el-table__row:hover{
  background-image: -webkit-gradient(linear,left top,right top,color-stop(0, rgba(35,153,41,0)),color-stop(0.5, rgba(35,153,41,.5)),color-stop(1, rgba(35,153,41,0)))
}
</style>
