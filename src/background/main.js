import DMMRequest from './DMMRequest'
import TorrentKittyRequest from './TorrentKittyRequest'
import BtsowRequest from './BtsowRequest'
import axios from 'axios'
chrome.runtime.onConnect.addListener(function (port) {
  if (port.name === 'DMM') {
    port.onMessage.addListener(function (request) {
      DMMRequest(request.id, request.cid).then(response => port.postMessage(response))
    })
  }
  if (port.name === 'TorrentKitty') {
    port.onMessage.addListener(function (request) {
      TorrentKittyRequest(`https://www.torrentkitty.tv/search/${request.id.replace('-', '')}`, response => port.postMessage(response))
    })
  }
  // btsow被屏蔽了 访问不了了😂😂
//   if (port.name === 'Btsow') {
//     port.onMessage.addListener(function (request) {
//       BtsowRequest(`https://btso.pw/search/${request.id}`, response => port.postMessage(response))
//     })
//   }
})
