function InfoButton (){
    var me = this;
    this.state = 'closed';
    var rootContainer = new PIXI.Container();
    rootContainer.position.x = 0;
    rootContainer.position.y = 0;

    var back = new PIXI.Graphics();
    back.beginFill(0x228B22, 1);
    back.drawRect(GAMECONFIG.reelsOffsetX, GAMECONFIG.reelsOffsetY, 2*WIDTH/3 + 50, 2*HEIGHT/3);
    //back.fillStyle = 'green';
    back.endFill();
    back.visible = false;
    rootContainer.addChild(back);

    var infoButton = new RegularButton(250, 550, 'images/infoButton.png');
    infoButton.scale = 8;
    infoButton.init(rootContainer);


    infoButton.onMouseDownCallback = function(){
        if(me.state == 'closed'){
            back.visible = true;
            me.state = 'opened';
            return;
        } else {
            back.visible = false;
            me.state = 'closed';
            return;
        }

    };

    this.rootContainer = rootContainer;

    this.init = function(stage){
        stage.addChild(rootContainer);
    };
}
