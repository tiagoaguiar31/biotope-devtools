console.log('\'Allo \'Allo! Popup');


function setBiotopeVersion(currentVersion) {
  let text = document.getElementsByClassName('version');
  console.log(currentVersion);
  console.log("inside set Version");
  text.innerText = currentVersion;
}

function receiveVersion(message, sender, sendResponse) {
  console.log(message);
  console.log("inside receive Version");
  setBiotopeVersion(message);
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log(message);
  console.log("i'm on it");
  sendResponse({
      data: "I am fine, thank you. How is life in the background?"
  }); 
});