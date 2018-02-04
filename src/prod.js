import Vue from "vue";
import App from "./App.vue";
import store from "./vuex/store";
import "element-ui/lib/theme-chalk/index.css";
import VueBar from 'vuebar'
Vue.use(VueBar)

var id = document.querySelector("#video_id td.text").textContent;
var app = document.createElement("div");
app.id = "app"
document.querySelector('body').appendChild(app)
var vm = new Vue({
  el: "#app",
  store,
  components: { App },
  template: "<App />"
})
console.log("begin")

class Channel {
  constructor(name, id, vue){
    this.requestId = id; 
    this.port = chrome.runtime.connect({name: name})
    this.vue = vue
    this.first = true
  }
  responseHandler(response){
    console.log(response)
    switch(this.port.name){
      case 'DMM':
        this.vue.$store.commit('setPhotos', response)
        this.vue.$store.commit("togglePhotoLoading")
        break
      case 'TorrentKitty':
        this.vue.$store.commit('addTorrents', response)
        this.first ? this.first = false || this.vue.$store.commit('toggleTorrentLoading') : null
        break
      case 'Btsow':
        this.vue.$store.commit('addBtsows', response)
        this.first ? this.first = false || this.vue.$store.commit('toggleBtsowLoading') : null
        break
      default:
        return
    }
  }
  send(){
    this.port.postMessage({id: this.requestId})
    this.port.onMessage.addListener(response => this.responseHandler(response))
  }
}

new Channel('DMM', id, vm).send()
new Channel('TorrentKitty', id, vm).send()
new Channel('Btsow', id, vm).send()




