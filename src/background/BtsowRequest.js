export default (url, postMessage) => {
    $.ajax({
        url: url,
        method: "GET",
        dataType: "html"
    })
    .then(resp => {
        var wrappedObj = $("<code></code>").append($(resp)),
            arr = $(".data-list .row:not(.hidden-xs) a", wrappedObj),
            urlSet = [];
        if(!arr.length){
            return postMessage([])
        }
        for(let i =0; i<arr.length; i++){
            urlSet.push(arr.eq(i).attr("href"))
        }
        urlSet.forEach((_url, index) => 
            $.ajax({
                url: _url,
                method: "GET",
                dataType: "html"
            }).then(resp => {
                let subWrappedObj = $("<code></code>").append($(resp))
                postMessage({
                    name: subWrappedObj.find('.container h3').eq(0).text(),
                    download: subWrappedObj.find('#magnetLink').val(),
                    size: $(".data-list",subWrappedObj).eq(0).find('.row:nth-child(3) div:nth-child(2)').text(),
                    date: $(".data-list",subWrappedObj).eq(0).find('.row:nth-child(4) div:nth-child(2)').text(),
                    detail: subWrappedObj.find('.detail-link').val(),
                })
            })
        )
    })
}