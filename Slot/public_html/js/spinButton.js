function SpinButton(){
    var me = this;
    var rootContainer = new PIXI.Container();
    rootContainer.position.x = 0;
    rootContainer.position.y = 0;
    var counter = 0;

    var spin = new RegularButton(GAMECONFIG.spinButtonX, GAMECONFIG.spinButtonY,'images/spinButton.png');
    spin.init(rootContainer);
    spin.scale(1.2);
    spin.onMouseUpCallback = function(){
        //counter += 1;
        if(me.reels[0] == 'stopped' &&
           me.reels[1] == 'stopped' &&
           me.reels[2] == 'stopped' &&
           me.reels[3] == 'stopped' &&
           me.reels[4] == 'stopped'){
             fireEvent('spinButtonPress');
        }

        //if(me.reels[0] !== 'stopped' ||
        //   me.reels[1] !== 'stopped' ||
        //   me.reels[2] !== 'stopped' ||
        //   me.reels[3] !== 'stopped' ||
        //   me.reels[4] !== 'stopped'){
        //     //fireEvent('stopButtonPress', counter);
        //     fireEvent('spinButtonPress');
        //}
        if(counter > 2){
            counter = 0;
        }
        console.log(counter);
    };

    this.quickStop = function(){

    };

    this.rootContainer = rootContainer;

    this.init = function(stage){
        stage.addChild(rootContainer);
    };

    this.buttonDisable = function(){
        spin.disable();
        spin.rootContainer.alpha = 0.5;
    };

    this.buttonEnable = function(){
        spin.enable();
        spin.rootContainer.alpha = 1;
        //counter = 0;
    };

    this.reels = [];
    this.setReelsState = function(reels){
        me.reels = reels;
    };


    addListener('allReelsStopped', me.buttonEnable);
    addListener('reelSpinStart', me.buttonDisable);
    addListener('reelsState', me.setReelsState);
}