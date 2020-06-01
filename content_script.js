	chrome.extension.onMessage.addListener(
        function(request, sender, sendResponse) {if (request.action === "copy")
                //sendResponse($(":root").html());
            //sendResponse(document.getElementsByTagName('html')[0].outerHTML);
            sendResponse(document.documentElement.outerHTML);
        else
                sendResponse("FUCK FAILED"); // snub them.
        });