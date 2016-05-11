var events = {
    reelSpinStart: [],
    reelSpinStop: [],
    reelSpinStopped: [],
    allReelsStopped: [],
    spinButtonPress: [],
    stopButtonPress: [],
    serverRequest : [],
    serverResponse : [],
    showBetLine : [],
    hideBetLine : [],
    reelsState : [],
    hideAllBetLines : [],
    setMaxBet : [],
    maxBetButtonPress : [],
    increasedBetLevel : [],
    decreasedBetLevel : [],
    increasedCoinValue : [],
    decreasedCoinValue : [],
    setGameSettings : [],
    settingsRequest : [],
    settingsResponse : [],
    betLevelBars : []
};

function addListener(eventName, functionCallback) {
    events[eventName].push(functionCallback);
}


function fireEvent(eventName, params) {
    //console.error(eventName);
    for (var i = 0; i < events[eventName].length; i++) {
        events[eventName][i](params);
    }

}
