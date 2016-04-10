function TextField(){
    var me = this;
    this.rootContainer = new PIXI.Container();
    me.rootContainer.position.x = 350;
    me.rootContainer.position.y = 525;
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
    graphics.drawRoundedRect(-40, -2, 250, 40);
    graphics.endFill();
    graphics.beginFill(0x228B22, 1);
    graphics.drawRoundedRect(-40, 50, 250, 40);
    graphics.endFill();
    me.rootContainer.addChild(graphics);

    this.win = 0;
    this.totalWin = 0;

    //addListener('reelSpinStopped', me.setWin);

    this.serverResponse = function(response){
        me.lastResponse = response;
    };

    var bigWin = new PIXI.Text('', style1);
    bigWin.position.x = 200;
    bigWin.position.y = -300;
    me.rootContainer.addChild(bigWin);

    this.winPresentation = function(){
        //console.log(me.lastResponse.winType);
        if(me.lastResponse.winType == 'bigWin'){
            console.log(me.lastResponse.winType);
            bigWin.text = '' + 'BigWin';
            //setTimeout(function(){
            //    me.rootContainer.removeChild(bigWin);
            //}, 10000);
        }

        if(me.lastResponse.winType == 'none'){
            console.log(me.lastResponse.winType);
            bigWin.text = '' + 'None';
        }

        if(me.lastResponse.winType == 'smallWin'){
            console.log(me.lastResponse.winType);
            bigWin.text = '' + 'SmallWin';
        }

    };

    var winFieldText = new PIXI.Text('WIN: ', style);
    winFieldText.position.x = -30;
    winFieldText.text = 'WIN: ' + 0;
    me.rootContainer.addChild(winFieldText);

    var totalWinField = new PIXI.Text('Total win: ', style);
    totalWinField.position.x = -30;
    totalWinField.position.y = 50;
    totalWinField.text = 'Total win: ' + 0;
    me.rootContainer.addChild(totalWinField);

    this.clearTexture = function(){
        bigWin.text = '';
        winFieldText.text = 'WIN: ' + '0';

    };

    this.setWin = function(){
        me.win = me.lastResponse.win;
        me.totalWin += me.lastResponse.win;
        winFieldText.text = 'WIN: ' + me.win;
        totalWinField.text = 'Total win: ' + me.totalWin;
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
    addListener('spinButtonPress', me.clearTexture);

}