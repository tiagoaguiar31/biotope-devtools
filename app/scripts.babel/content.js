// content.js
console.log("content js");


// Send message to background.js
window.addEventListener('load', wordSelected);

function wordSelected () {
  let message = "testing";
  chrome.runtime.sendMessage(message);
};


//Append script to have access to local variables
setTimeout(() => {
  var s = document.createElement('script');
  s.src = chrome.extension.getURL('app/scripts/version.js');
  s.async = true;
  (document.head||document.documentElement).appendChild(s);
    s.onload = function() {
      s.remove();
    };

  }, 2000);
  
  window.addEventListener('biotope_connectExtension', function(e) {
    console.log(e)
    console.log(e.detail);
  }, false);