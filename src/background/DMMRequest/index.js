import tryDirectly from './tryDirectly'
import tryIndirectly from './tryIndirectly'
export default async (id, cid, postMessage) => {
  var directResp,
    indirectResp
  directResp = await tryDirectly(cid)
  if (directResp.isSuccess) {
    return postMessage(directResp)
  }
  indirectResp = await tryIndirectly(id)
  return postMessage(indirectResp)
}
var startTime = new Date()
tryDirectly('meyd00402').then(resp => {
  console.log(resp)
  var endTime = new Date()
  console.log(endTime - startTime)
})
