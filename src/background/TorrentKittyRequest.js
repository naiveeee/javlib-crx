import axios from "axios"
export default (url, postMessage) =>{
    console.log(`已发送TorrentKitty请求`)
    var response = [];
    axios({
        url: url,
        method: "GET",
        dataType: "html"
    })
    .then(resp => {
        console.log(`已经访问到TorrentKitty,正在获取种子...`)
        var parser = new DOMParser(),
            doc = parser.parseFromString(resp.data, "text/html"),
            nodeList = doc.querySelectorAll('#archiveResult tr'),
            urlSet = []
        if (!nodeList[1].querySelector('td.size').textContent) {
            return postMessage([])
        }
        for (let i = 1; i < nodeList.length; i++) {
            response.push({
                name: nodeList[i].querySelector('td.name').textContent,
                date: nodeList[i].querySelector('td.date').textContent,
                detail: `https://www.torrentkitty.tv${nodeList[i].querySelector("td.action a").attributes.href.value}`,
                download: nodeList[i].querySelector("td.action a:nth-child(2)").attributes.href.value
            })
            urlSet.push(response[i - 1].detail);
        }
        var count = 0
        urlSet.forEach((_url, index) => 
            axios({
                url: _url,
                method: "GET",
                dataType: "html"
            }).then(resp => {
                console.log(`成功获取了${++count}个种子`)
                let _doc = parser.parseFromString(resp.data, 'text/html')
                response[index]["size"] = _doc.querySelector(".detailSummary tr:nth-child(4) td").textContent
                postMessage(response[index])
            })
        )
    })
}
    