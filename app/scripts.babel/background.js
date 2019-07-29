'use strict';

//All context Menus gets stored in here
let contextMenus = {};

contextMenus.biotopeDevtools = 
  chrome.contextMenus.create(
    {"title": "Biotope DevTools"},
    function() {
      if(chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
      }
    }
    );

// chrome.runtime.onInstalled.addListener(details => {
//   console.log('previousVersion', details.previousVersion);

//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [new chrome.declarativeContent.PageStateMatcher({
//         pageUrl: {hostEquals: 'developer.chrome.com'},
//       })
//       ],
//           actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
//   });

// });

// chrome.browserAction.setBadgeText({text: '\'Allo'});

console.log('\'Allo \'Allo! Event Page for Browser Action');
