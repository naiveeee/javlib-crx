import axios from 'axios'
import tryDirectly from './tryDirectly'
import tryIndirectly from './tryIndirectly'
import tryAllCids from './tryAllCids'
export default (id, cid, postMessage) => {
  axios({
    url: 'https://www.dmm.co.jp',
    method: 'head'
  })
  .then(async resp => {
    //判断是否有日本ip
    if(resp.request.responseURL != 'https://www.dmm.co.jp/'){
      for(let i = 0, cids = tryAllCids(cid); i < cids.length; i++){
        let res = await tryDirectly(cids[i])
        if(res.length != 0){
          return {
            isSuccess: true,
            result: res
          }
        }
      }
      return {
        isSuccess: false,
        result: "并没能找到图片"
      }
    }
    return tryIndirectly(id)
  })
  .then(response => postMessage(response))
}