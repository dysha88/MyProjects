function BetLines(){
    var me = this;
    this.rootContainer = new PIXI.Container();
    me.rootContainer.position.x = 0;
    me.rootContainer.position.y = 0;

    var betLines = [];
    var i;

    this.createBetLine = function(params){
        var betLine = new PIXI.Graphics();
        betLine.lineStyle(params.width, '0xffff99');
        betLine.moveTo(params.x, params.y);
        if(params.x1 != undefined){
            betLine.lineTo(params.x1, params.y1);
        }
        if(params.x2 != undefined){
            betLine.lineTo(params.x2, params.y2);
        }
        if(params.x3 != undefined){
            betLine.lineTo(params.x3, params.y3);
        }
        if(params.x4 != undefined){
            betLine.lineTo(params.x4, params.y4);
        }
        if(params.x5 != undefined){
            betLine.lineTo(params.x5, params.y5);
        }
        betLines.push(betLine);
        me.rootContainer.addChild(betLine);
    };

    for(i = 0; i < GAMECONFIG.betLines.length; i++){
        me.createBetLine(GAMECONFIG.betLines[i]);
    }

    this.hideAllBetLines = function() {
        for (i = 0; i < betLines.length; i++) {
            betLines[i].visible = false;
        }
    };
    me.hideAllBetLines();


    this.getRoot = function(){
        return me.rootContainer;
    };

    this.showBetLine = function(showLine){
        betLines[showLine].visible = true;
    };


    //me.showBetLine(24);


    this.hideBetLines = function(){
        //betLines[hideLine].visible = false;
        for (i = 0; i < betLines.length; i++) {
            betLines[i].visible = false;
        }
    };

    this.showAllBetLines = function(){
        for(i = 0; i < betLines.length; i++){
            setTimeout(me.showBetLine(i), 5000);
            setTimeout(me.hideBetLines, 5000);
        }
    };
    //
    //me.showAllBetLines();


    addListener('showBetLine', me.showBetLine);
    addListener('hideBetLine', me.hideBetLines);
    addListener('spinButtonPress', me.hideAllBetLines);
    addListener('setMaxBet', me.showAllBetLines);
    //addListener('hideAllBetLines', x);
}