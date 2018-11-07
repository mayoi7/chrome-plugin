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
