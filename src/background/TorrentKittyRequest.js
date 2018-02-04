export default (url, postMessage) =>{
    var response = [];
    $.ajax({
        url: url,
        method: "GET",
        dataType: "html"
    })
    .then(resp => {
        var wrappedObj = $("<code></code>").append($(resp)),
            arr = $("#archiveResult tr", wrappedObj),
            urlSet = [];
        if (!arr.eq(1).find('td.size').text()) {
            return postMessage([])
        }
        for (let index = 1; index < arr.length; index++) {
            response.push({
                name: arr.eq(index).find("td.name").text(),
                date: arr.eq(index).find("td.date").text(),
                detail: `https://www.torrentkitty.tv${arr.eq(index).find("td.action a").eq(0).attr("href")}`,
                download: arr.eq(index).find("td.action a").eq(1).attr("href")
            })
            urlSet.push(response[index - 1].detail);
        }
        urlSet.forEach((_url, index) => 
            $.ajax({
                url: _url,
                method: "GET",
                dataType: "html"
            }).then(resp => {
                let subWrappedObj = $("<code></code>").append($(resp))
                response[index]["size"] = subWrappedObj.find(".detailSummary tr").eq(3).find('td').text()
                postMessage(response[index])
            })
        )
    })
}
    