//尝试所有可能的cid 接受由javlib中大图截取的cid为参数 应返回一个数组
function tryCid_1 (cid) {
  var index = cid.match(/(\D)\d/).index
  return cid.substr(0, index + 1) + '00' + cid.substr(index + 1)
}
function tryCid_2 (cid) {
  var index = cid.match(/(\D)\d/).index
  return cid.substr(0, index + 1) + '0' + cid.substr(index + 1)
}

export default cid => [cid, tryCid_1(cid), tryCid_2(cid)]