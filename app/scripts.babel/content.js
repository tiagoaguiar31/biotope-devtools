// content.js
console.log("content js");

var response;

//Respond to popup's requests
window.addEventListener('load', function() {
  chrome.runtime.onMessage.addListener(receiveRequest);
})

// Receive request from other environments
const receiveRequest = (request, sender, sendResponse) => {
  appendVersionScript(function(){
    const { type } = request;
    if (type == 'request_version') {
      sendToBackground({type, message: response});
    }
  });
}

//Send Message to Background
const sendToBackground = message => chrome.runtime.sendMessage(message);

//Append script to have access to local variables
const appendVersionScript = (forwardResponse) => {
  let s = document.createElement('script');
  s.src = chrome.extension.getURL('app/scripts/version.js');
  (document.head||document.documentElement).appendChild(s);
    s.onload = function() {
      s.remove();
    };

    window.addEventListener('biotope_connectExtension', function(e) {
      response = {...e.detail};
      forwardResponse();
      //return e.detail;
    }, false);
}