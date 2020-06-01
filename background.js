//window.data = null;
'use strict';
//chrome.extension.onRequest.addListener(onRequest);
//chrome.extension.onRequestExternal.addListener(onRequest);

//by huanyuan

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
// code...
	  var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://127.0.0.1:8080/upload",true);//修改成自己的接口
        xhr.setRequestHeader('content-type', 'application/json; charset=UTF-8');
        alert('back收到的网址'+request.tab);
        alert('back收到的html:'+request.htmlresponse);
        let data = JSON.stringify({tab: request.tab, htmlresponse:request.htmlresponse});
        xhr.send(data);
		alert('json化后的data:'+data)

    sendResponse('我已收到你的消息：' +JSON.stringify(request));//做出回应
});