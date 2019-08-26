console.log('\'Allo \'Allo! Popup');

const setBiotopeVersion = isBiotope => {
  let subheading = document.getElementById('subheading');
  if (isBiotope && isBiotope.type !== null) {
    subheading.innerHTML = `This page seems to be using ${isBiotope.type} ✅`;
  } else {
    subheading.innerHTML = "This page doesn't seem to be using Biotope ❌";
  }
}

// function receiveVersion(message, sender, sendResponse) {
//   console.log(message);
//   setBiotopeVersion(message);
// }

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  chrome.tabs.sendMessage(tabs[0].id, {type: 'request_version'});
});

// testing
function checkForVersion(setVersion) {
    let backgroundPage = chrome.extension.getBackgroundPage();
    let msg = backgroundPage.version;
    console.log('msg :', msg);
    setVersion(msg);
}

window.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    checkForVersion(setBiotopeVersion);
  }, 1000);
});