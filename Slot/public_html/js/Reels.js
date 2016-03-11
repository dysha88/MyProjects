function Reels (reelStrip){
    var me = this;
    this.x = 20;
    this.y = 20;
    this.reelStrip = reelStrip;
    this.rootContainer = new PIXI.Container();
    me.rootContainer.position.x = 20;
    me.rootContainer.position.y = 0;


    for(var i = 0; i < reelStrip.length;i++){
        var symb = new PIXI.Sprite.fromImage("images/" + reelStrip[i] + ".png");
        symb.position.x = 0;
        symb.position.y = i * 58;
        me.rootContainer.addChild(symb);
    };

    this.setPos = function(position){
        me.rootContainer.position.y = -position*58;
    };

    this.startSpin = function (){

    };



    
};


