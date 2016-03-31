function TextField(){
    var me = this;
    this.rootContainer = new PIXI.Container();
    me.rootContainer.position.x = 350;
    me.rootContainer.position.y = 575;
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

    var graphics = new PIXI.Graphics();
    //graphics.lineStyle(2, 0x0000FF, 1);
    graphics.beginFill(0x228B22, 1);
    graphics.drawRoundedRect(-10, -2, 200, 40);
    graphics.endFill();
    me.rootContainer.addChild(graphics);

    var win = 0;
    var winFieldText = new PIXI.Text('WIN:' + ' ' + win, style);
    me.rootContainer.addChild(winFieldText);

    this.setWin = function(params){
        win = 100;
    };

    this.getRoot = function(){
        return me.rootContainer;
    };

    addListener('reelSpinStop', me.setWin);

}