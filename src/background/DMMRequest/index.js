import axios from 'axios'
import tryDirectly from './tryDirectly'
import tryIndirectly from './tryIndirectly'
import tryAllCids from './tryAllCids'
export default async (id, cid, postMessage) => {
  var directResp,
    indirectResp;
  directResp = await(tryDirectly(cid))
  if(directResp.isSuccess) {
    return postMessage(directResp)
  }
  indirectResp = await(tryIndirectly(id))
  return postMessage(indirectResp)
}