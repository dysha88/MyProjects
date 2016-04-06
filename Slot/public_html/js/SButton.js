function SButton(x,y,btnName){
    var me = this;
    this.state = 'up'; //up, hove, down, disabled -- all possible states
    this.rootContainer = new PIXI.Container();
    me.rootContainer.position.x = x;
    me.rootContainer.position.y = y;

    //var spinButton = new PIXI.Sprite.fromImage('images/spinButton.png');
    //me.rootContainer.addChild(spinButton);


    this.button;
    this.update = function(){

    };

    this.onClickCallBack = function(){

    };

    this.onclick = function(){
        if(me.state !== 'disabled'){
            console.log('robe');
            fireEvent(btnName + 'Press');
            me.onClickCallBack();
        }
    };
    this.setState = function(newState){
        me.state = newState;
    };
    this.init = function(stage){
        var button = new PIXI.Sprite.fromImage('images/' + btnName + '.png');
        button.interactive = true;
        button.on('mousedown', me.onclick);
        me.rootContainer.addChild(button);
        me.button = button;
        stage.addChild(me.rootContainer);
    };
    //this.getRoot = function (){
    //    return me.rootContainer;
    //};

    this.buttonDisable = function(){
        me.rootContainer.alpha = 0.5;
    };

    this.buttonEnable = function(){
        me.rootContainer.alpha = 1;
    };

    addListener('spinButtonPress', me.buttonDisable);
    addListener('allReelsStopped', me.buttonEnable)


}
