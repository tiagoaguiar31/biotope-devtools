'use strict';

//All context Menus gets stored in here
let contextMenus = {};

contextMenus.biotopeDevtools = 
chrome.contextMenus.create(
    {"title": "Biotope DevTools"},
    function() {
        if(chrome.runtime.lastError) {
          console.log("ERROR:")
          console.error(chrome.runtime.lastError.message);
        }
    }
);


function contextMenuHandler(info, tab) {
  if(info.menuItemId === contextMenus.biotopeDevtools) {
    console.log(chrome.tabs);
    chrome.tabs.executeScript({
      file: 'app/scripts/version.js'
    });
  }
}

console.log('Hello from the background Page');

chrome.contextMenus.onClicked.addListener(contextMenuHandler);
