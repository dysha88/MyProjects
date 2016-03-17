function Reels (reelStrip){
    var me = this;
    this.newPos = 30;
    this.state = 'stopped';
    this.rootContainer = new PIXI.Container();

    var allContainer = new PIXI.Container(),
        copyContainer = new PIXI.Container();

    me.rootContainer.addChild(allContainer);
    me.rootContainer.addChild(copyContainer);

    copyContainer.position.y = reelStrip.length * GAMECONFIG.symbolHeight;

    me.rootContainer.position.x = 30;
    me.rootContainer.position.y = me.newPos - reelStrip.length * GAMECONFIG.symbolHeight;


    var i, j, symb, symb2;
    var num = parseInt(HEIGHT/GAMECONFIG.symbolHeight);

    for(i = 0; i < reelStrip.length; i++){
        symb = new PIXI.Sprite.fromImage("images/" + reelStrip[i] + ".png");
        symb.position.y = i * GAMECONFIG.symbolHeight;
        allContainer.addChild(symb);
    }
    for(j = 0; j  < num; j++){
        symb2 = new PIXI.Sprite.fromImage("images/" + reelStrip[j] + ".png");
        symb2.position.y = j * GAMECONFIG.symbolHeight;
        copyContainer.addChild(symb2);
    }


    this.stopPos = 0;
    this.setPos = function(position){
        me.state = 'moving';
        me.stopPos = me.newPos - position*GAMECONFIG.symbolHeight;




    }

    this.getRoot = function (){
        return me.rootContainer;
    };

    this.setDistance = function(num){
        me.rootContainer.position.x = me.rootContainer.position.x + GAMECONFIG.distanceBetweenReels*num;
    };

    this.update = function () {

        if((me.rootContainer.position.y > me.stopPos - me.step + 1) && (me.rootContainer.position.y < me.stopPos + me.step + 1) ){
            me.state = 'stopped';
        }

        if(me.state!='moving'){
            return true;
        }

        this.step = 10;

        me.rootContainer.position.y += me.step;
        if(me.rootContainer.position.y > me.newPos){
            me.rootContainer.position.y = me.newPos -  reelStrip.length * GAMECONFIG.symbolHeight;
        }

    };

    this.startSpin = function (){

    };



    
};


