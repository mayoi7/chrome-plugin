/*jshint esversion: 6 */

chrome.runtime.onInstalled.addListener(function(){
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    // 只有打开b站才显示pageAction
                    new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'bilibili.com'}})
                ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});

// 右键单击页面
chrome.contextMenus.create({
    title: "测试右键菜单",
    documentUrlPatterns: ['https://*.bilibili.com/*'], // 只在某些页面显示此右键菜单
    onclick: function(){
      alert('您点击了右键菜单！');
    }
});

// popup.js
function testByPop() {
  alert("be called by popup.js");
}

// access popup page
// var views = chrome.extension.getViews({type:'popup'});
// if(views.length > 0) {
//     console.log(views[0].location.href);
// } else {
//   console.log("ERROR: get popup failed");
// }

// send msg to content-script.js
// wrong!
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
// sendMessageToContentScript({cmd:'bg-msg-test', value:'this is background.js'}, function(response)
// {
//     console.log('from content: ' + response);
// });

// listen request from content-script.js
// WARNING: only one could send callback message to content-script.js
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
// {
//     console.log('background.js get message from content-script');
//     console.log(request, sender, sendResponse);
//     sendResponse('background.js got message: ' + JSON.stringify(request));
// });

// let tabId = null;
// chrome.windows.getCurrent(function(currentWindow)
// {
//   tabId = currentWindow.id;
//   console.log('tabId: ' + currentWindow.id);
// });

// dynamic js injection
// chrome.tabs.executeScript cannot be used anymore, details in url below
// http://www.itkeyword.com/doc/8573177962004958x711/chrome-tabs-executescript-cannot-access-a-chrome-url
// chrome.tabs.executeScript(tabId, {code: 'document.body.style.backgroundColor="red"'}, _=>{
//   let e = chrome.runtime.lastError;
//   if(e !== undefined) {
//     console.log(tabId, _, e);
//   }
// });

// dynamic js injection
// new way to inject js code
// CARE: codes below only could control 'DOM' of 'background'
//       if u want to control 'DOM' of target page,
//       u should write these code in 'content-script.js'
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   //code in here will run every time a user goes onto a new tab,
//   // so you can insert your scripts into every new tab
//   console.log('js code be injected');
//   if (changeInfo.status == "complete") {  // when page is completely loaded
//     document.body.style.background = "#000";
//   }
// });

// save props
// chrome.storage.sync.set({color: 'green'}, function() {
//     console.log('save suceess');
// });

// web request
// chrome.webRequest.onBeforeRequest.addListener(details => {
//
//     if(details.type == 'image') {
//         chrome.notifications.create(null, {
//             type: 'basic',
//             iconUrl: 'images/icon.png',
//             title: 'image found',
//             message: 'image url: ' + details.url,
//         });
//     }
// }, {urls: ["<all_urls>"]}, ["blocking"]);
