//尝试直接从pics.dmm.co.jp获取图片 不需要日本的ip 访问速度慢 成功率较低
import axios from 'axios'
export default function tryIt (cid, index = 1) {
  let url = `https://pics.dmm.co.jp/digital/video/${cid}/${cid}jp-${index}.jpg`
  return axios({
    url: url,
    method: 'head'
  })
  .then(resp => {
    if(resp.request.responseURL === url){
      return tryIt(cid, index + 1)
    }
    return Promise.resolve(index - 1).then(num => !num ? [] : Array.apply(null, {length: num}).map((_, index) => `https://pics.dmm.co.jp/digital/video/${cid}/${cid}jp-${index+1}.jpg`))
  })
}