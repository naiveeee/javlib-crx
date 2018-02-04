import getImage from './getLargeImg'
export default (url, postMessage) =>{
    var response = {};
    $.ajax({
        url: url,
        method: "GET",
        dataType: "html"
    })
    .then(resp => {
        //这里要包装一下，不然jquery解析不出来
        var wrappedObj_1 = $("<code></code>").append($(resp)),
            title = $("title", wrappedObj_1).text();
        if (
            title ===
            "- DMM.R18 where you cannot use this page from the area to live" ||
            title === "このページはお住まいの地域からご利用になれません - DMM.R18"
        ) {
            response.isSuccess = false
            response.result = "要访问DMM，请使用日本的ip"
            return
        }
        var aim = $("#list .tmb a", wrappedObj_1)
            .eq(0)
            .attr("href");
        return $.ajax({
            url: aim,
            method: "GET",
            dataType: "html"
        }).then(resp => {
            var wrappedObj_2 = $("<code></code>").append($(resp)),
                arr = $("#sample-image-block a img", wrappedObj_2);
            if (!arr.length) {
                response.isSuccess = false
                response.result = "并没能找到图片"
            } else {
                response.isSuccess = true
                response.result = [];
                for (let i = 0; i < arr.length; i++) {
                    response.result.push(getImage(arr.eq(i).attr("src")));
                }
            }
        });
    })
    .then(_ => postMessage(response))
}