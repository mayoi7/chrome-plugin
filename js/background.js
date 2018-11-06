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
