function Mask(){
    var me = this;
    var thing = new PIXI.Graphics();
    thing.position.x = GAMECONFIG.reelsOffsetX - 30;
    thing.position.y = GAMECONFIG.reelsOffsetY - 30;
    thing.beginFill();
    thing.drawRect(0, 30, 950, 465);
    thing.endFill();
    this.init = function(stage, name){
        stage.addChild(thing);
        name.mask = thing;
    };
}