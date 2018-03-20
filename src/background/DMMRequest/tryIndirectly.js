//使用dmm.R18提供的搜索框查找图片 需要日本的ip 访问速度快 成功率高
import axios from 'axios'
import getLargeImg from '../getLargeImg.js'
export default id =>
  axios({
    url: `http://www.dmm.co.jp/search/=/searchstr=${id}/sort=rankprofile/limit=1000`,
    method: 'GET',
    dataType: 'html'
  }).then(resp => {
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
              return {
                isSuccess: false,
                result: "并没找到图片"
              }
            }
            return {
              isSuccess: true,
              result: Array.prototype.map.call(imgList, node => getLargeImg(node.src))
            }
          })
        }
      }
  })