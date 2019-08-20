'use strict';
console.log("background js");
//All context Menus gets stored in here
let contextMenus = {};


/*
Menu handler for the right click event on document
*/

contextMenus.rightClickHandler = 
chrome.contextMenus.create(
    {title: "Biotope DevTools"},
    function() {
        if(chrome.runtime.lastError) {
          console.log("ERROR:")
          console.error(chrome.runtime.lastError.message);
        }
    }
);

function contextMenuHandler(info, tab) {
  if(info.menuItemId === contextMenus.rightClickHandler) {
    chrome.tabs.executeScript({
      file: 'app/scripts/version.js'
    });
  }
}

/*
Menu handler for the extension button event
*/

function received(request, sender, sendResponse) {
  console.log(request, "Background received this message");
}



chrome.runtime.onMessage.addListener(received);
chrome.contextMenus.onClicked.addListener(contextMenuHandler);
