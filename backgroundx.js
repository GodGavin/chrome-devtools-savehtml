'use strict';
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
{
	  var xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", uploadProgress, false);
        xhr.addEventListener("load", uploadComplete, false);
        xhr.addEventListener("error", uploadFailed, false);
        xhr.addEventListener("abort", uploadCanceled, false);
        xhr.open("POST", "http://127.0.0.1:8080/upload",true);//�޸ĳ��Լ��Ľӿ�
		xhr.send("tab=" + request.tab +"&htmlresponse=" + request.htmlresponse);

 sendResponse('�����յ������Ϣ��' +JSON.stringify(request));//������Ӧ
});