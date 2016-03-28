function Reels (reelStrip, reelNum){
    var me = this;
    this.reelNum = reelNum;
    this.newPos = 30;
    this.state = 'stopped';
    this.rootContainer = new PIXI.Container();

    var allContainer = new PIXI.Container(),
        copyContainer = new PIXI.Container();

    me.rootContainer.addChild(allContainer);
    me.rootContainer.addChild(copyContainer);

    copyContainer.position.y = reelStrip.length * GAMECONFIG.symbolHeight;

    me.rootContainer.position.x = 30;
    me.rootContainer.position.y = GAMECONFIG.reelsOffsetY - reelStrip.length * GAMECONFIG.symbolHeight;


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
    this.reelSpeed = 30;

    this.setStopPos = function(position){
        //me.state = 'moving';
        me.stopPos = GAMECONFIG.reelsOffsetY - position*GAMECONFIG.symbolHeight;
    }

    this.getRoot = function (){
        return me.rootContainer;
    };

    this.setDistance = function(){
        me.rootContainer.position.x = me.rootContainer.position.x + GAMECONFIG.distanceBetweenReels*me.reelNum;
    };

    this.update = function () {
    var currentPos = me.rootContainer.position.y;
    var lastStep;

        if(me.state=='stopped'){
            return true;
        }

        if(me.state == 'stopping'){
            if(currentPos < me.stopPos ){
                lastStep = me.stopPos - currentPos;
                if(lastStep <= me.reelSpeed){
                    me.state = 'stopped';

                    currentPos += lastStep;
                } else {
                    currentPos += me.reelSpeed;
                }
                //me.setPos(parseInt(Math.random()*20) + 1);
            }
        }

        //if((me.rootContainer.position.y > me.stopPos - me.reelSpeed + 10) && (me.rootContainer.position.y < me.stopPos + me.reelSpeed + 10) ){
        //    me.state = 'stopped';
        //}

        currentPos += me.reelSpeed;
        me.rootContainer.position.y = currentPos;

        if(me.rootContainer.position.y > GAMECONFIG.reelsOffsetY){
            me.rootContainer.position.y = GAMECONFIG.reelsOffsetY -  reelStrip.length * GAMECONFIG.symbolHeight;
        }

    };

    addListener('reelSpinStart', function(reelNum){
        if(me.reelNum == reelNum) {
            me.state = 'moving';
        }
    });

    addListener('reelSpinStop', function(params){
        if(me.reelNum == params.reelNum) {
            me.state = 'stopping';
            me.stopPos = -GAMECONFIG.symbolHeight*params.stopSymNum;
            console.error(me.stopPos);
        }

    });





    
};


