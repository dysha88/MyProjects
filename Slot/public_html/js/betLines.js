function BetLines(){
    var me = this;
    this.rootContainer = new PIXI.Container();
    me.rootContainer.position.x = 0;
    me.rootContainer.position.y = 0;

    var betLine1 = new PIXI.Graphics();
    betLine1.beginFill();
    //betLine1.draw();
    betLine1.lineTo(120,350);
    betLine1.lineStyle = 'green';
    betLine1.endFill();

    this.getRoot = function(){
        return me.rootContainer;
    };
    addListener('showBetLine', x);
    addListener('hideBetLine', x);
    addListener('hideAllBetLines', x);
}