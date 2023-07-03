let scale = 0.5;

chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.executeScript(
        tab.id,
        {code: `
        let height = 0;
        const scale = ${scale};
        let intervalID = setInterval(function () {
            height+=scale;
            document.body.scrollTo({ top: height });
            window.scrollTo({ top: height });
            if(height >= document.body.scrollHeight){
                clearInterval(intervalID);
            }
        }, scale);
        `}
    );
});