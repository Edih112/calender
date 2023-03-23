// function onExecuted(result) {
//     console.log(`We executed in tab`);
// }
//
// function onError(error) {
//     console.log(`Error: ${error}`);
// }
//
// const executing = browser.tabs.executeScript(
//     tab.id;
//     {
//         file: "/main.js"
//     });
// executing.then(onExecuted, onError);

// function getTabId() {
//     const logCurrentTabData = (tabs) => {  currentTab = tabs[0];  return currentTab.tabId()};
//     var tabId = tabs.query({active:true, currentWindow: true}).then(logCurrentTabData);
//     return tabId;
// }

window.onload = function() {
    document.getElementById("add_button").addEventListener("click", scrape_init);
    console.log("added listener");
}

async function getCurrentTabId() {
    let queryOptions = {
        active: true,
        currentWindow: true
    };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.id;
}

async function scrape_init() {
    await chrome.scripting.executeScript({
        target: {tabId: (await getCurrentTabId())},
        files: ["main.js"]
    }).then(() => console.log("script injected"));
};
