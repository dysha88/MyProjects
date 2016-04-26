function WinSituation(){
    var me = this;
    this.lastResponse = {};
    this.serverResponse = function(response){
        me.lastResponse = response;
    };

    this.showWinBetLines = function(){
        for(var i = 0; i < me.lastResponse.betLines.length; i++){

            fireEvent('showBetLine', x);

        setTimeout(me.hideBetLine, 10000);
    };

    this.hideBetLine = function(){
        fireEvent('hideBetLine');
    };

    addListener('serverResponse', me.serverResponse);
    addListener('allReelsStopped', me.showWinBetLines);
}