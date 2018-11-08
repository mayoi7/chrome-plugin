/*jshint esversion: 6 */
// document.addEventListener('DOMContentLoaded', function()
// {
//     console.log('content-script run');
// });

$(function() {
  console.log('content-script.js run');
  injectCustomJs('js/inject.js');
});

function injectCustomJs(jsPath)
{
    jsPath = jsPath || 'js/inject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(jsPath);
    console.log('addr: ' + temp.src);
    temp.onload = function()
    {
        // 放在页面不好看，执行完后移除掉
        this.parentNode.removeChild(this);
    };
    document.head.appendChild(temp);
}

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)
// {
//     // console.log(sender.tab ?"from a content script:" + sender.tab.url :"from the extension");
//     if(request.cmd == 'popup-msg-test') console.log('popup-msg: ' + request.value);
//     if(request.cmd == 'bg-msg-test') console.log('bg-msg: ' + request.value);
//     sendResponse('got it!');
// });
//
// chrome.runtime.sendMessage({greeting: 'this is content-script.js'}, function(response) {
//     console.log('get response: ' + response);
// });

// receive message from 'inject.js'
// window.addEventListener("message", function(e)
// {
//   if('inject_msg_test' in e.data)
//     console.log('content-script get msg: ' + e.data.inject_msg_test);
// }, false);

// listen long-connection
// let port = chrome.runtime.connect({name: 'qst'}); // connection name
// port.postMessage({'msg': 'a1'});
// port.onMessage.addListener((msg) => {
//   console.log('content-script get msg: ' + msg);
// });

// get props saved in 'background.js'
// first param is default value
// chrome.storage.sync.get({color: 'red', age: 18}, function(items) {
//     console.log(items.color, items.age);
// });
