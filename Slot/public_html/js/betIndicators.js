function BetIndicators(){
    var me = this;
    this.rootContainer = new PIXI.Container;
    me.rootContainer.position.x = 0;
    me.rootContainer.position.y = 0;

    this.getRoot = function(){
        return me.rootContainer;
    };

    var betIndicator1 = new PIXI.Graphics;
    betIndicator1.beginFill(0x228B22, 1);
    //betIndicator1.lineStyle(2, 0x228B22);
    //betIndicator1.moveTo(130, 100);
    betIndicator1.drawCircle(100, 100 ,10);
    betIndicator1.endFill();
    me.rootContainer.addChild(betIndicator1);

    var style = {font : '18px Arial', stroke : '#4a1850', fill : '#F7EDCA'};

    var betNum1 = new PIXI.Text('1', style);
    betNum1.position.x = 95;
    betNum1.position.y = 90;
    //betNum1.text = '1';
    me.rootContainer.addChild(betNum1);


}