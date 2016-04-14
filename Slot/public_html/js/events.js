var events = {
    reelSpinStart: [],
    reelSpinStop: [],
    reelSpinStopped: [],
    allReelsStopped: [],
    spinButtonPress: [],
    serverRequest : [],
    serverResponse : [],
    showBetLine : [],
    hideBetLine : [],
    hideAllBetLines : []
};

function addListener(eventName, functionCallback) {
    events[eventName].push(functionCallback);
}


function fireEvent(eventName, params) {
    console.error(eventName);
    for (var i = 0; i < events[eventName].length; i++) {
        events[eventName][i](params);
    }

}
