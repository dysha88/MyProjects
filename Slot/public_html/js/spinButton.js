function SpinButton(){
    var me = this;
    var rootContainer = new PIXI.Container();
    rootContainer.position.x = 10;
    rootContainer.position.y = 10;

    var spin = new RegularButton(600,560,'images/spinButton.png');
    spin.init(rootContainer);
    spin.onMouseUpCallback = function(){

            fireEvent('spinButtonPress');
            me.buttonDisable();
    };

    this.rootContainer = rootContainer;

    this.init = function(stage){
        stage.addChild(rootContainer);
    };

    this.buttonDisable = function(){
        spin.disable();
    };

    this.buttonEnable = function(){
        spin.enable();

    };


    addListener('allReelsStopped', me.buttonEnable);
}