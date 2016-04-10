function SpinButton(){
    var me = this;
    var rootContainer = new PIXI.Container();
    rootContainer.position.x = 0;
    rootContainer.position.y = 0;

    var spin = new RegularButton(600,560,'images/spinButton.png');
    spin.init(rootContainer);
    spin.onMouseDownCallback = function(){
        console.log(spin.state);
        if(spin.state !== 'disabled'){
            fireEvent('spinButtonPress');
        }
    };

    this.rootContainer = rootContainer;

    this.init = function(stage){
        stage.addChild(rootContainer);
    };

    this.buttonDisable = function(){
        spin.rootContainer.interactive = false;
    };

    this.buttonEnable = function(){
        spin.rootContainer.interactive = true;
        spin.downImage.alpha = 1;


    };

    addListener('spinButtonPress', me.buttonDisable);
    addListener('allReelsStopped', me.buttonEnable);
}