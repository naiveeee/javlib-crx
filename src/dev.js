// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import store from './vuex/store'
import 'element-ui/lib/theme-chalk/index.css'
import VueBar from 'vuebar'
Vue.use(VueBar)

/* eslint-disable */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App />',
  beforeCreate: function () {
    this.$store.commit('setPhotos', {
      isSuccess: false,
      result: 'hello'
    })
    setTimeout(() => {
      this.$store.commit('addTorrents',
      [
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-22',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-23',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-24',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-22',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-22',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-22',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-22',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-22',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-22',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-19',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-28',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        }
      ]
    )
    this.$store.commit('toggleTorrentLoading')
    }, 5000);
    this.$store.commit('addBtsows',
      [
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-22',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-23',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-24',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-22',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-22',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-22',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-22',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-22',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-22',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-19',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        },
        {
          name: 'aaa',
          size: '1kb',
          date: '2017-03-28',
          detail: 'https://www.baidu.com',
          download: 'magnet:?xt=urn:btih:CB1C1BDD62862BB35C615F26C559870B152DAA34&amp;dn=SUPD-018&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=http%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A6868%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.ktxp.com%3A7070%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbtfans.3322.org%3A6969%2Fannounce&amp;tr=http%3A%2F%2Ftracker.bittorrent.am%2Fannounce&amp;tr=udp%3A%2F%2Ftracker.bitcomet.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Ftk3.5qzone.net%3A8080%2F&amp;tr=http%3A%2F%2Ftracker.btzero.net%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fscubt.wjl.cn%3A8080%2Fannounce&amp;tr=http%3A%2F%2Fbt.popgo.net%3A7456%2Fannounce&amp;tr=http%3A%2F%2Fthetracker.org%2Fannounce&amp;tr=http%3A%2F%2Ftracker.prq.to%2Fannounce&amp;tr=http%3A%2F%2Ftracker.publicbt.com%2Fannounce&amp;tr=http%3A%2F%2Ftracker.dmhy.org%3A8000%2Fannounce&amp;tr=http%3A%2F%2Fbt.titapark.com%3A2710%2Fannounce&amp;tr=http%3A%2F%2Ftracker.tjgame.enorth.com.cn%3A8000%2Fannounce&amp'
        }]
    )
  }
})
// vm.$store.commit('setPhotos', {
//   photos: {
//     isSuccess: true,
//     result: ['https://pics.dmm.co.jp/digital/video/mide00506/mide00506jp-1.jpg',
//       'https://pics.dmm.co.jp/digital/video/mide00506/mide00506jp-2.jpg',
//       'https://pics.dmm.co.jp/digital/video/mide00506/mide00506jp-3.jpg',
//       'https://pics.dmm.co.jp/digital/video/mide00506/mide00506jp-4.jpg',
//       'https://pics.dmm.co.jp/digital/video/mide00506/mide00506jp-5.jpg',
//       'https://pics.dmm.co.jp/digital/video/mide00506/mide00506jp-6.jpg',
//       'https://pics.dmm.co.jp/digital/video/mide00506/mide00506jp-7.jpg',
//       'https://pics.dmm.co.jp/digital/video/mide00506/mide00506jp-8.jpg',
//       'https://pics.dmm.co.jp/digital/video/mide00506/mide00506jp-9.jpg',
//       'https://pics.dmm.co.jp/digital/video/mide00506/mide00506jp-10.jpg']
//   }
// })
