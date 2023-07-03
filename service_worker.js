// Interval ID and page height
let intId = -1;
let height = 0;


// Perform auto scroll
function autoScroll() {
    // Check if the interval ID is undefined
    if(this.intId == undefined){
        console.log("intId undefined");
        
    }

    // If there is a interval ID, clear it, undefine it and return
    else{
        clearInterval(intId);
        intId = undefined;
        return;
    }

    if(this.height == undefined){
        height = 0;
    }
    
    // Scroll page
    const scale = 0.5;
    let intervalID = setInterval(function () {
        height+=scale;
        document.body.scrollTo({ top: height });
        window.scrollTo({ top: height });
        if(height >= document.body.scrollHeight){
            clearInterval(intervalID);
        }
    }, scale);

    // Set global interval ID
    intId = intervalID;
    return intervalID;
}


// On plugin icon click
chrome.action.onClicked.addListener(function(tab) {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: autoScroll,
    });
});
