//尝试直接从pics.dmm.co.jp获取图片 不需要日本的ip
import axios from 'axios'
import tryAllCids from './tryAllCids'
function tryIt (cid, index = 1) {
  let url = `https://pics.dmm.co.jp/digital/video/${cid}/${cid}jp-${index}.jpg`
  return axios({
    url: url
  })
  .then(resp => {
    if(resp.request.responseURL === url){
      return tryIt(cid, index + 1)
    }
    return Promise.resolve(index - 1).then(num => !num ? [] : Array.apply(null, {length: num}).map((_, index) => `https://pics.dmm.co.jp/digital/video/${cid}/${cid}jp-${index+1}.jpg`))
  })
}
export default async function (cid) {
  console.log('Trying directly...')
  for(let i = 0, cids = tryAllCids(cid); i < cids.length; i++){
    console.log(`all cids: ${cids.join(',')}; Trying ${cids[i]}`)
    let res = await tryIt(cids[i])
    if(res.length != 0){
      console.log('Succeed')
      return {
        isSuccess: true,
        result: res
      }
    }
  }
  console.log(`Failed! Reason:尝试所有可能失败`)
  return {
    isSuccess: false,
    result: ''
  }
}