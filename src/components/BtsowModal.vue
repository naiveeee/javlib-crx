<template>
  <Dialog :visible.sync="show" top="10vh" :show-close="false" :close-on-click-modal="true" width="55%" id="btsow-modal">
    <div slot="title">
      <a class="logo" href="https://btso.pw"></a>
    </div>
    <BtsowWall />
 </Dialog>
</template>
<script>
import BtsowWall from './BtsowWall.vue'
import {Dialog} from 'element-ui'
export default {
  components: {
    BtsowWall,
    Dialog
  },
  computed: {
    show: {
      get: function () {
        return this.$store.state.btsowModalShow
      },
      set: function () {
        this.$store.commit('TOGGLE_BTSOW_SHOW')
      }
    }
  }
}
</script>
<style scoped>
.logo{
  display: block;
  width: 130px;
  height: 40px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAAyCAMAAAAdtHvaAAAAllBMVEVMaXH/////////////////ggD///////////////////////////////93uw7/////////////////////////////////////////////////////////hAB+uA7/////////hAB+uA60pAl7ug5+uA5+uA7/gwB+uA7/gwD/hAD/hAD/hAD/hAChqgv/////hAB+uA4lGm+SAAAALnRSTlMA5nn6mZ7aDfOCYEW8VJ9ppAexxi84jylwEhoDISgo0e59ghRFnGRIz8Y7XeWMCu+LeQAABBRJREFUaN7tmNl2mzAQhtkCYgs7GJsW0jR7e1Te/+UqaQSMVAe7PrnhHP4rEJb0MZoNG8auXbt27dq1VT3/2BjvuC3gn+O2gBnv+LQx3vH+8u8yb1Y2D3qa2pMYPpVxksSltgKMNnhuhtdZNmrbC7zj60VenxIp2+xTYCnteVCIuhzg6AxUyDyg+WU6jVpA6VBCI3gWUpvYNBbXrcnG8cTH71iPzyMAP17gzakisXhANRXaYDSfTopGzY4P8RH3hNZOxPWBX3Zo4x/jWV0APrkq2XBkg7XOWxtGogxYMLtTZwtgPrkH0+PfFuwqNS7zjuP3Nd6jzc1VO0w54avzI0tydltH7M5OxZMQ9jbrID70dDbg0eTXJE3iQyTQcuFg7LH0DCGfX1f8KryKd/y5whuiY6rm1YWs5WBhb+kF/TyF24ym4LaxYKtgGuFBdiTA6xjS6oVxHe8aMHcrcwrnfjlp6YjTCWYmwBjSgLSUL7T8/iDfNph42WObyDW8QR7dVbzj86e8NYqedpAgIBdZ2yNz4Bhl7SeBJ+2XLzlwgNuJl0dG78vlxWB7Ne/nwAWCcpSQaDlOgHlpHmZoqkWV1xNLRdLDGkC0KukG0eQXV/KO9+ejLuNGScOASQRS782PKgVHpj0S+SXmy7XMiHj547aB4Cvp4k5zgbg/qyeh+9fzFm7UvOWflkfJ5IcLPchNlsyCXTIC/gZ4Q3HXQHj4/0TbjYoVXDvWPBvtERKtXMSazURI1pK3EtYOjY69FIFQSL6C19cKQ66aC7ucB5l3TlG+Yn/JmUi/L1t4W+H3J344g4y297e7Fb29rPPynFVUIVOcuBRbQZjL0opLkJpwEC3YH/MmMi0LxMaHYD2x39tHBywPuvuzpod13h7nLBMbWLhnfMaDBlmpUo03kv5zEi/qyiLHNiCBq3jOw+28Hs5ZwuUKXPhsWfg6Jy2iDNsxhOxnd2qhTGTets0pFtlbDD3ukJg+buatlJjpcf61UOHjoWUfUR3jNxbF+cFz5+pdyM6pxe1fgLd9uZWX22qYDBco/osaBngt6cuix4mmQSLb9Lafm1Ejmnu6pecxM2Xf9xt5eVT0Xdc0TVfVFPc3wko1LnWU9+NeYM5gAnEI2IyjReiSTaRJG5yAam3jb79u4W350jbOZ6HSDRxwGmHG7HuydFxT7ia9C0uk6GTmOwt+pH9DfQq8yltpzToqV41CD43upBR3ZEttNBTeEEWnEm3T59AbAH48fsNa/brQvnuKUu0zUUOFPiSGQMtt+lwfE8bLV5YuAH7/j+oW+rOsJOiUR45fK/1q7BSu20dOjCMnC1I+mluNOtWvp6TTicWzs9uLyvGyof8c7jbGa/zeGC+rzR/b+lvy98P+V/KuXbt27foS/QWPMR5Eo/beHAAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0px auto;
}
</style>

<style>
#btsow-modal .el-dialog__header {
  text-align: center;
}
#btsow-modal .el-dialog__body {
  padding-top: 0px;
}
#btsow-modal .el-dialog {
  border: 1px solid white;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(180deg,#3c3c3c 0,#222);
}
#btsow-modal .el-table{
  background-color: inherit;
}
#btsow-modal tr{
  background-color: inherit;
}
#btsow-modal th{
  background-color: inherit;
  padding: 5px 0px;
}
#btsow-modal td {
  border: none;
  padding: 8px 0px;
}
#btsow-modal .cell {
  text-align: center;
  white-space: nowrap;
}
#btsow-modal tr.el-table__row:hover{
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(35,153,41,0)), color-stop(50%, rgba(0,0,0,.5)), to(rgba(35,153,41,0)))
}
</style>
