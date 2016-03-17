var GAMECONFIG = {
    reelStrip : [
        ['SYM1', 'SYM10', 'SYM8'],
        ['SYM3', 'SYM4', 'SYM7'],
        ['SYM2', 'SYM5', 'SYM6']
    ],
    reelsOffsetX : 150,
    reelsOffsetY : 30,
    symbolHeight : 156,
    symbolWidth : 80,
    distanceBetweenReels : 180
};
//Example.  Return main root container
//function Reel(reelStrip){
//    this.getRoot = function(){
//        return me.rootContainer;
//    };
//
//    this.setNewCoords = function(x,y){
//        me.rootContainer.position.x = x;
//        me.rootContainer.position.y = y;
//    };
//
//
//};
//
//var reel1 = new Reel([1, 2, 3, 4, 5]);
//reel1.setNewCoords(100, 20);
//
//stage.addChild(reel1.getRoot());