function InfoButton (){
    var me = this;

    this.opened = false;

    var rootContainer = new PIXI.Container();
    rootContainer.position.x = 0;
    rootContainer.position.y = 0;

    rootContainer.visible = me.opened;

    var back = new PIXI.Graphics();
    back.beginFill(0x228B22, 1);
    back.drawRect(GAMECONFIG.reelsOffsetX, GAMECONFIG.reelsOffsetY, 2*WIDTH/3 + 50, 2*HEIGHT/3);
    //back.fillStyle = 'green';
    back.endFill();
    rootContainer.addChild(back);

    var infoButton = new RegularButton(260, 560, 'images/infoButton.png');
    infoButton.scale = 8;

    infoButton.onMouseUpCallback = function(){

        me.opened = !me.opened;
        me.rootContainer.visible = me.opened;

    };

    this.closePaytable = function(){
        me.opened = false;
        me.rootContainer.visible = me.opened;
    };

    this.rootContainer = rootContainer;

    this.init = function(stage){
        stage.addChild(rootContainer);
        infoButton.init(stage);
    };

    addListener('allReelsStopped', me.closePaytable);
}
