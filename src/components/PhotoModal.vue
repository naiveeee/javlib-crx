<template>
  <Dialog :visible.sync="show" top="10vh" :show-close="false" :close-on-click-modal="true" width="55%" id="img-modal">
    <div style="text-align:center">
      <PhotoWall />
    </div>
  </Dialog>
</template>
<script>
import PhotoWall from './PhotoWall.vue'
import {Dialog} from 'element-ui'
export default {
  components: {
    PhotoWall,
    Dialog
  },
  computed: {
    show: {
      get: function () {
        return this.$store.state.photoModalShow
      },
      set: function () {
        this.$store.commit('TOGGLE_PHOTO_SHOW')
      }
    }
  }
}
</script>
<style>
#img-modal .el-dialog__header {
  padding: 0px;
}
#img-modal .el-dialog__footer {
  padding: 0px;
}
#img-modal .el-dialog__body {
  padding: 0px;
}
#img-modal .el-dialog{
  border: 1px solid white;
  border-radius: 20px;
  overflow: hidden;
}
</style>
