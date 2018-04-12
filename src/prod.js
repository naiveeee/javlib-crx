import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vueBar from 'vuebar'
import "element-ui/lib/theme-chalk/index.css";
import getImg from "./background/getLargeImg"
Vue.use(vueBar)
//构建展示框
var app = document.createElement("div");
app.id = "app"
document.querySelector('body').appendChild(app)
var vm = new Vue({
  el: "#app",
  store,
  components: { App },
  template: "<App />"
})
//构建与background通信的通道
class Channel {
  constructor(name, data, vue){
    this.data = data; 
    this.port = chrome.runtime.connect({name: name})
    this.vue = vue
    this.first = true
  }
  responseHandler(response){
    switch(this.port.name){
      case 'DMM':
        this.vue.$store.commit('SET_PHOTO', response)
        this.vue.$store.commit('TOGGLE_PHOTO_LOAD')
        break
      case 'TorrentKitty':
        this.vue.$store.commit('ADD_TORRENT', response)
        this.first ? this.first = false || this.vue.$store.commit('TOGGLE_TORRENT_LOAD') : null
        break
      case 'Btsow':
        this.vue.$store.commit('ADD_BTSOW', response)
        this.first ? this.first = false || this.vue.$store.commit('TOGGLE_BTSOW_LOAD') : null
        break
      default:
        return
    }
  }
  send(){
    this.port.postMessage({...this.data})
    this.port.onMessage.addListener(response => this.responseHandler(response))
  }
}
var nodeList = document.querySelectorAll('.previewthumbs img'),
    id = document.querySelector("#video_id td.text").textContent
//如果页面中有小图的话就不必向DMMRequest发送请求
if(nodeList.length){
  vm.$store.commit('SET_PHOTO', {isSuccess: true, result: Array.prototype.map.call(nodeList, val => getImg(val.src))})
  vm.$store.commit('TOGGLE_PHOTO_LOAD')
}
else{
//cid用于给非日本ip用户提供一个解决办法（不能确保有用）
  var cid = document.querySelector('#video_jacket_img').src.match(/\/([^\/]+)\/[^\/]+$/)[1]
  new Channel('DMM', {id, cid}, vm).send()
}
new Channel('TorrentKitty', {id}, vm).send()
new Channel('Btsow', {id}, vm).send()




