import axios from "axios"
export default (url, postMessage) => {
  axios({
    url: url,
    method: "GET",
    dataType: "html"
  })
  .then(resp => {
    var parser = new DOMParser(),
        doc = parser.parseFromString(resp.data ? resp.data : resp, "text/html"),
        nodeList = doc.querySelectorAll('.data-list .row:not(.hidden-xs) a'),
        urlSet = []
    if(!nodeList.length){
      return postMessage([])
    }
    //获取所有种子链接地址
    for(let i =0; i<nodeList.length; i++){
      urlSet.push(nodeList[i].attributes.href.value)
    }
    //获取每个种子的详细信息
    urlSet.forEach((_url, index) =>
      axios({
        url: _url,
        method: "GET",
        dataType: "html"
      }).then(resp => {
        let _doc = parser.parseFromString(resp.data ? resp.data : resp, "text/html")
        postMessage({
          name: _doc.querySelector('.container h3').textContent,
          download: _doc.querySelector('#magnetLink').textContent,
          size: _doc.querySelector('.data-list .row:nth-child(3) div:nth-child(2)').textContent,
          date: _doc.querySelector('.data-list .row:nth-child(4) div:nth-child(2)').textContent,
          detail: _doc.querySelector('.detail-link').textContent,
        })
      })
    )
  })
}