function GameSettings(){
    var me = this;

    this.request = function(){
        me.response(me.generateSettings());
    };

    this.response = function(settings){
        fireEvent('settingsResponse', settings);
    };

    this.generateSettings = function(){
        //var arr = [];
        //arr = gameSettings.coinValues;

        var gameSettings = {
            cash : 5000,
            bet : 25,
            betLevel : [1, 2, 3, 4],
            currentBetLevel : 1,
            currentCoinValue : 0.01,
            maxBetLevel : 4,
            coinValues : [0.01, 0.02, 0.05, 0.10, 0.20, 0.50]
        };


        return gameSettings;
    };

    addListener('settingsRequest', me.request);

    //bars = [bar1 ,bar2, bar3,bar4];

//addListener('increasedBetLevel', function(){settings.currentBetLevel += 1});
}