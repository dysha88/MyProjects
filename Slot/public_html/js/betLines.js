function BetLines(){
    var me = this;
    this.rootContainer = new PIXI.Container();
    me.rootContainer.position.x = 0;
    me.rootContainer.position.y = 0;

    var betLine1 = new PIXI.Graphics();
    betLine1.beginFill();
    betLine1.lineStyle(7, 0x228B22, 1);
    betLine1.moveTo(155, 100);
    betLine1.lineTo(1035, 100);
    betLine1.endFill();
    me.rootContainer.addChild(betLine1);

    this.getRoot = function(){
        return me.rootContainer;
    };
    //addListener('showBetLine', x);
    //addListener('hideBetLine', x);
    //addListener('hideAllBetLines', x);
}