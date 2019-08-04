// content.js
console.log("hello from content.js")
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
       console.log("user clicked on the page");
      }
    }
  );
