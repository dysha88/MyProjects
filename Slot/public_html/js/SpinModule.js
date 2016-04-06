function SpinModule(){
    var me = this;
    this.lastResponse = {};
    this.reels=['stopped','stopped','stopped','stopped','stopped'];


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
            me.reels[reelNum] = 'spin';

        }, timeout);
    };

    this.stopAllReels = function(){
        //me.stopReel(1, 100);
        //me.stopReel(2, 900);
        var i;
        for (i = 0; i < 5; i++){
            me.stopReel(i, i*400)
        }
        console.log(me.lastResponse.win);
    };

    this.stopReel = function(reelNum, timeout){
        setTimeout(function(){

            fireEvent('reelSpinStop', {
                reelNum : reelNum,
                stopSymNum : me.lastResponse.reels[reelNum],
                win : me.lastResponse.win
            });

        }, timeout);
    };

    this.serverResponse = function(response){
        me.lastResponse = response;
    };

    this.response = me.lastResponse;

    this.checkAllReelsStopped = function(){
        //for(var i = 0; i < me.reels.length; i++){
        //    if(me.reels[me.reels.length - 1] == 'stopped'){
        //        fireEvent('allReelsStopped');
        //    }
        //}
        if(me.reels[0] == 'stopped' &&
            me.reels[1] == 'stopped' &&
            me.reels[2] == 'stopped' &&
            me.reels[3] == 'stopped' &&
            me.reels[4] == 'stopped'){
            fireEvent('allReelsStopped');//, {win : me.lastResponse.win});
        }
    };

    addListener('serverResponse', me.serverResponse);
    addListener('spinButtonPress', me.startAllReels);
    addListener('reelSpinStopped', function(reelNum){
        me.reels[reelNum] = 'stopped';
        me.checkAllReelsStopped();
    });
}
