function TextField(){
    var me = this;
    this.rootContainer = new PIXI.Container();
    me.rootContainer.position.x = 350;
    me.rootContainer.position.y = 575;
    this.lastResponse = {};
    var style = {
        font : 'bold italic 30px Arial',
        fill : '#F7EDCA',
        stroke : '#000000',
        strokeThickness : 3
        //dropShadow : true,
        //dropShadowColor : '#000000',
        //dropShadowAngle : Math.PI / 6,
        //dropShadowDistance : 6,
        //wordWrap : true,
        //wordWrapWidth : 240
    };

    var style1 = {
        font : 'bold italic 70px Arial',
        fill : '#228B22',
        stroke : '#000000',
        strokeThickness : 3
    };

    var graphics = new PIXI.Graphics();
    //graphics.lineStyle(2, 0x0000FF, 1);
    graphics.beginFill(0x228B22, 1);
    graphics.drawRoundedRect(-10, -2, 200, 40);
    graphics.endFill();
    me.rootContainer.addChild(graphics);

    this.win = 0;

    //addListener('reelSpinStopped', me.setWin);

    this.serverResponse = function(response){
        me.lastResponse = response;
    };

    var bigWin = new PIXI.Text('BigWin', style1);
    bigWin.position.x = 200;
    bigWin.position.y = -300;
    //me.rootContainer.addChild(bigWin);

    this.winPresentation = function(){
        console.log(me.lastResponse.winType);
        if(me.lastResponse.winType == 'bigWin'){
            console.log(me.lastResponse.winType);
            me.rootContainer.addChild(bigWin);
            //setTimeout(function(){
            //    me.rootContainer.removeChild(bigWin);
            //}, 10000);
        }

        if(me.lastResponse.winType == 'none'){

        }

        if(me.lastResponse.winType == 'smallWin'){

        }

    };

    var winFieldText = new PIXI.Text('WIN:', style);
    me.rootContainer.addChild(winFieldText);

    this.setWin = function(){
        me.win = me.lastResponse.win;
        winFieldText.text = 'WIN: ' + me.win;
        console.log(me.win);
    };

    this.getRoot = function(){
        return me.rootContainer;
    };

    this.update = function(){

    };
    //addListener('reel')
    addListener('serverResponse', me.serverResponse);
    addListener('allReelsStopped', me.setWin);
    addListener('allReelsStopped', me.winPresentation);

}