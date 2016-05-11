function WinSituation(){
    var me = this;
    this.lastResponse = {};
    this.serverResponse = function(response){
        me.lastResponse = response;
    };

    this.showWinBetLines = function(){
        for(var i = 0; i < me.lastResponse.betLines.length; i++) {

            fireEvent('showBetLine', me.lastResponse.betLines[i]);
            //console.log(me.lastResponse.betLines[i]);

            setTimeout(me.hideBetLine, 3000);
        }
    };

    this.hideBetLine = function(){
        //console.log(betLine);
        fireEvent('hideBetLine', me.lastResponse.betLines);
    };

    addListener('serverResponse', me.serverResponse);
    addListener('allReelsStopped', me.showWinBetLines);
}