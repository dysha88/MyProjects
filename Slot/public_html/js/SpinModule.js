function SpinModule(){
    var me = this;


    this.startAllReels = function(){
        //me.startReel(1, 100);
        //me.startReel(2, 900);
        var i;
        for (i = 0; i < 5; i++){
            me.startReel(i, i*300)
        }
        setTimeout(me.stopAllReels, 5000);
    };

    this.startReel = function(reelNum, timeout){
        setTimeout(function(){

            fireEvent('reelSpinStart', reelNum);

        }, timeout);
    };

    this.stopAllReels = function(){
        //me.startReel(1, 100);
        //me.startReel(2, 900);
        var i;
        for (i = 0; i < 5; i++){
            me.stopReel(i, i*300)
        }
    };

    this.stopReel = function(reelNum, timeout){
        setTimeout(function(){

            fireEvent('reelSpinStop', {
                reelNum : reelNum,
                stopSymNum: parseInt(Math.random()*10)
            });

        }, timeout);
    };

    addListener('spinButtonPress', me.startAllReels);

};
