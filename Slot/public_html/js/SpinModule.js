function SpinModule(){
    var me = this;
    this.lastResponse = {};


    this.startAllReels = function(){
        //me.startReel(1, 100);
        //me.startReel(2, 900);
        var i;
        for (i = 0; i < 5; i++){
            me.startReel(i, i*300)
        }
        setTimeout(me.stopAllReels, 3000);

        fireEvent ('serverRequest', {action : "nextRound"});
    };

    this.startReel = function(reelNum, timeout){
        setTimeout(function(){

            fireEvent('reelSpinStart', reelNum);

        }, timeout);
    };

    this.stopAllReels = function(){
        //me.stopReel(1, 100);
        //me.stopReel(2, 900);
        var i;
        for (i = 0; i < 5; i++){
            me.stopReel(i, i*400)
        }
    };

    this.stopReel = function(reelNum, timeout){
        setTimeout(function(){

            fireEvent('reelSpinStop', {
                reelNum : reelNum,
                stopSymNum : me.lastResponse.reels[reelNum]
            });

        }, timeout);
    };

    this.serverResponse = function(response){
        me.lastResponse = response;
    };

    this.response = me.lastResponse;

    addListener('serverResponse', me.serverResponse);
    addListener('spinButtonPress', me.startAllReels);

}
