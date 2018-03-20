import getImage from "./getLargeImg"
import DMMRequest from "./DMMRequest"
import TorrentKittyRequest from "./TorrentKittyRequest"
import BtsowRequest from "./BtsowRequest"
chrome.runtime.onConnect.addListener(function(port){
    if(port.name === 'DMM'){
        port.onMessage.addListener(function(request){
            DMMRequest(request.id, request.cid, response => port.postMessage(response))
        })
    }
    if(port.name === 'TorrentKitty'){
        port.onMessage.addListener(function(request){
            TorrentKittyRequest(`https://www.torrentkitty.tv/search/${request.id.replace('-','')}`, response => port.postMessage(response))
        })
    }
    if(port.name === 'Btsow'){
        port.onMessage.addListener(function(request){
            BtsowRequest(`https://btso.pw/search/${request.id}`, response => port.postMessage(response))
        })
    }
})
