/*jshint esversion: 6 */
var bg = chrome.extension.getBackgroundPage();
// bg.testByPop(); // will appear before page ;

// send msg to content-script.js
// function sendMessageToContentScript(message, callback)
// {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
//     {
//         chrome.tabs.sendMessage(tabs[0].id, message, function(response)
//         {
//             if(callback) callback(response);
//         });
//     });
// }
// sendMessageToContentScript({cmd:'popup-msg-test', value:'this is popup.js'}, function(response)
// {
//     console.log('from content: ' + response);
// });

// listen request from content-script.js
// WARNING: only one could send callback message to content-script.js
// WARNING: only effective when 'popup.html' opened
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
// {
//     console.log('popup.js get message from content-script');
//     console.log(request, sender, sendResponse);
// //    sendResponse('popup.js got message: ' + JSON.stringify(request));
// });

// long-connection between 'popup' and 'content-script'
// chrome.runtime.onConnect.addListener(function(port) {
//   console.log(port.name);
//   port.postMessage({'qst': 'q2'});
//   port.onMessage.addListener(function(msg) {
//     console.log('popup get msg: ' + msg);
//     port.postMessage({'qst': 'q3'});
//   });
// });

// dynamic js injection
// statements below ONLY run after aim page refresh
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   //code in here will run every time a user goes onto a new tab,
//   // so you can insert your scripts into every new tab
//   console.log('js code be injected');
//   document.body.style.background = "#000";
// });

// dynamic js injection
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor =  "#000";'});
// });

// get current window id
// chrome.windows.getCurrent(function(currentWindow)
// {
//     console.log('当前窗口ID：' + currentWindow.id);
// });

// get current tab id
// function getCurrentTabId(callback)
// {
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs)
//     {
//         if(callback) callback(tabs.length ? tabs[0].id: null);
//     });
// }
