	chrome.extension.onMessage.addListener(
        function(request, sender, sendResponse) {if (request.action === "copy")
                sendResponse($(":root").html());
            else
                sendResponse("FUCK FAILED"); // snub them.
        });