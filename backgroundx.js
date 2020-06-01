'use strict';
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	  var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        xhr.open("POST", "http://127.0.0.1:8080/upload",true);//修改成自己的接口
		xhr.send("tab=" + request.tab +"&htmlresponse=" + request.htmlresponse);

 sendResponse('我已收到你的消息：' +JSON.stringify(request));//做出回应
});