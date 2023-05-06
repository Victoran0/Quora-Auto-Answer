chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        if (tab.url && tab.url.includes("quora.com/answer")) {
            chrome.tabs.sendMessage(tabId, {
                message: "Answer the first question"
            })
            // console.log('quroa answer page')
        }
    }
})