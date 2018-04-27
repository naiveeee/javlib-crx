//使用dmm.R18提供的搜索框查找图片 需要日本的ip
import getLargeImg from '../getLargeImg.js'
import axios from 'axios'
export default function (id) {
  let url = `http://www.dmm.co.jp/search/=/searchstr=${id}/sort=rankprofile/limit=1000`
  console.log(`Trying indirectly, url:${url}`)
  return axios({
    url: url,
    method: 'GET',
    dataType: 'html',
    timeout: 2000
  }).then(resp => {
    if(resp.request.responseURL !== url){
      console.log(`没有日本IP 不能使用该方法`)
      return {
        isSuccess: false,
        result: "并没找到图片"
      }
    }
    var parser = new DOMParser(),
      doc = parser.parseFromString(resp.data, "text/html"),
      nodeList = doc.querySelectorAll("#list .tmb a"),
      //例： （数字或无）abp（数字或无）001（字母或无）
      reg = new RegExp(`^\\d*${id.split('-')[0]}\\d*${id.split('-')[1]}\\D*$`, 'i')
      //匹配第一个符合条件的cid
      for(let i = 0; i < nodeList.length; i++){
        let cid = nodeList[i].href.match(/cid\=(.*)\//)[1]
        if(reg.test(cid)){
          return axios({
            url: nodeList[i].href,
            method: 'GET',
            dataType: 'html'
          }).then(resp => {
            var _doc = parser.parseFromString(resp.data, "text/html"),
              imgList = _doc.querySelectorAll('#sample-image-block a img')
            if(!imgList.length){
              console.log(`找到了该资源，但是没能找到图片`)
              return {
                isSuccess: false,
                result: "并没找到图片"
              }
            }
            console.log(`Succeed!`)
            return {
              isSuccess: true,
              result: Array.prototype.map.call(imgList, node => getLargeImg(node.src))
            }
          })
        }
      }
      console.log(`并没能找到该资源`)
      return {
        isSuccess: false,
        result: "并没找到图片"
      }
  })
}
