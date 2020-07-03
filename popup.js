$(function () {
    $("#btnCopy").click(function () {
    // chrome.tabs.query可以通过回调函数获得当前页面的信息tabs
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // 发送一个copy消息出去
            chrome.tabs.sendMessage(tabs[0].id, { action: "copy" }, function (response) {
      // 这里的回调函数接收到了要抓取的值，获取值得操作在下方content-script.js
      // 将值存在background.js的data属性里面。
                var win = chrome.extension.getBackgroundPage();
                //win.data=response;
				var htmlresponse=response;
                console.log(response);
				//alert(tabs[0].url);
				//alert(response);
				document.getElementById("tr1").innerHTML=response;

				//content_scripts——>background  例如
				chrome.runtime.sendMessage(
				{tab:tabs[0].url.substring(8),htmlresponse:htmlresponse},
					function(response) {
						console.log('收到来自后台的回复,保存结果为：' + response);
					}
				);



            });  
        }); 
    });
});