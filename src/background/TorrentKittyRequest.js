import axios from "axios"
export default (url, postMessage) =>{
    var response = [];
    axios({
        url: url,
        method: "GET",
        dataType: "html"
    })
    .then(resp => {
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
        urlSet.forEach((_url, index) => 
            axios({
                url: _url,
                method: "GET",
                dataType: "html"
            }).then(resp => {
                let _doc = parser.parseFromString(resp.data, 'text/html')
                response[index]["size"] = _doc.querySelector(".detailSummary tr:nth-child(4) td").textContent
                postMessage(response[index])
            })
        )
    })
}
    