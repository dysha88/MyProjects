function SpinModule(){
    var me = this;
    var i;
    this.lastResponse = {};
    this.reels = ['stopped','stopped','stopped','stopped','stopped'];
    //this.quickStopState = true;
    this.counter;

    this.startAllReels = function(){
        //me.startReel(1, 100);
        //me.startReel(2, 900);
        //me.quickStopState = !me.quickStopState;
        //me.counter = counter;
                //console.log(me.counter);
        //if(counter == 1) {
            for (i = 0; i < 5; i++) {
                me.startReel(i, i * 200)
            }
            setTimeout(me.stopAllReels, 1000);
            fireEvent ('serverRequest'/*, {action : "nextRound"}*/);
        //}

        //if(counter == 2) {
        //    me.stopAllReels();
        //}

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
        //console.log(me.counter);
        //if(me.counter == 1) {
            for (i = 0; i < 5; i++) {
                me.stopReel(i, i * 300)
            }
        //}
        //if(me.counter == 2) {
        //    for (i = 0; i < 5; i++) {
        //        me.stopReel(i, i * 50)
        //    }
        //}
        //console.log(me.lastResponse.win);
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

    this.quickStopAllReels = function(counter){
        //me.stopReel(1, 100);
        //me.stopReel(2, 900);
        //me.quickStopState = !me.quickStopState;
        if(counter == 2) {
            var i;
            for (i = 0; i < 5; i++) {
                me.quickStopReel(i, i * 200)
            }
        }
        //console.log(me.lastResponse.win);
    };

    this.quickStopReel = function(reelNum, timeout){
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
        if(me.reels[0] == 'stopped' &&
            me.reels[1] == 'stopped' &&
            me.reels[2] == 'stopped' &&
            me.reels[3] == 'stopped' &&
            me.reels[4] == 'stopped'){
            fireEvent('allReelsStopped');//, {win : me.lastResponse.win});
        }
    };


    fireEvent('reelsState', me.reels);

    addListener('serverResponse', me.serverResponse);
    addListener('spinButtonPress', me.startAllReels);
    //addListener('stopButtonPress', me.quickStopAllReels);
    addListener('reelSpinStopped', function(reelNum){
        me.reels[reelNum] = 'stopped';
        me.checkAllReelsStopped();
    });
}
