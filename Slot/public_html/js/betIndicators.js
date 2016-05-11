function BetIndicators(){
    var me = this;
    var rootContainer = new PIXI.Container;
    rootContainer.position.x = 0;
    rootContainer.position.y = 0;

    this.betIndicators = [];

    this.rootContainer = rootContainer;

    this.init = function(stage){
        stage.addChild(rootContainer);
    };
    var i;

    this.createIndicators = function(params){
        var style = {font : '13px Arial Black', stroke : '#4a1850', fill : '#F7EDCA'};


        var betIndicator = new PIXI.Graphics;
        betIndicator.lineStyle(3, '0xffff99');
        betIndicator.beginFill(params.color, params.transparent);
        betIndicator.drawCircle(params.x, params.y ,params.r);
        betIndicator.endFill();

        var betNum = new PIXI.Text(params.text, style);
        betNum.position.x = params.x1;
        betNum.position.y = params.y1;

        var indicators = new PIXI.Container;
        indicators.addChild(betIndicator);
        indicators.addChild(betNum);

        return indicators;


    };

    for(i = 0; i < GAMECONFIG.betIndicators.length; i++){
        me.betIndicators[i] = new PIXI.Container;
        me.betIndicators[i].addChild(me.createIndicators(GAMECONFIG.betIndicators[i]));
    }

    for(i = 0; i < me.betIndicators.length; i++){
        me.rootContainer.addChild(me.betIndicators[i]);
    }

    this.hideAllIndicators = function(){
        for(i = 0; i < me.betIndicators.length; i++){
        me.betIndicators[i].visible = false;
        }
    };

    me.hideAllIndicators();

    this.showBetIndicators = function(showIndNum){
        me.betIndicators[showIndNum].visible = true;
    };

    this.hideBetIndicators = function(){
        for(i = 0; i < me.betIndicators.length; i++){
            me.betIndicators[i].visible = false;
        }
    };

    this.showAllIndicators = function(){
        for(i = 0; i < me.betIndicators.length; i++){
            me.betIndicators[i].visible = true;
        }
        setTimeout(me.hideAllIndicators, 5000);
    };

    //me.showAllIndicators();

    addListener('showBetLine', me.showBetIndicators);
    addListener('hideBetLine', me.hideBetIndicators);
    addListener('spinButtonPress', me.hideAllIndicators);
    addListener('setMaxBet', me.showAllIndicators);

}