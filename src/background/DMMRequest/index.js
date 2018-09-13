import tryDirectly from './tryDirectly'
import tryIndirectly from './tryIndirectly'
export default async (id, cid) => {
  let directResp
  let indirectResp
  directResp = await tryDirectly(cid)
  if (directResp.isSuccess) {
    return directResp
  }
  indirectResp = await tryIndirectly(id)
  return indirectResp
}
// var startTime = new Date()
// tryIndirectly('meyd-402').then(response => {
//   var endTime = new Date()
//   console.log(endTime - startTime)
// })
