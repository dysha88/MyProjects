var GAMECONFIG = {
    //reelStrip : [
    //    ['SYM6','SYM2','SYM7','SYM3','SYM5','SYM2','SYM3','SYM9','SYM4','SYM10','SYM9','SYM2','SYM10','SYM8','SYM1','SYM0','SYM7','SYM6','SYM2','SYM5','SYM4','SYM9','SYM1','SYM8'],
    //    ['SYM0','SYM7','SYM6','SYM5','SYM4','SYM2','SYM7','SYM4','SYM8','SYM9','SYM5','SYM1','SYM2','SYM8','SYM4','SYM7','SYM8','SYM10','SYM6','SYM3','SYM9','SYM2','SYM4','SYM6','SYM10','SYM8','SYM3','SYM10'],
    //    ['SYM10','SYM4','SYM3','SYM9','SYM6','SYM2','SYM10','SYM6','SYM5','SYM7','SYM8','SYM4','SYM9','SYM1','SYM10','SYM4','SYM7','SYM5','SYM9','SYM3','SYM8','SYM6','SYM5','SYM7','SYM6','SYM9','SYM0','SYM10','SYM7','SYM5','SYM9','SYM6','SYM8','SYM2','SYM10','SYM6','SYM5','SYM7','SYM8','SYM4','SYM9','SYM1'],
    //    ['SYM8','SYM3','SYM7','SYM5','SYM10','SYM9','SYM2','SYM8','SYM7','SYM6','SYM3','SYM5','SYM4','SYM8','SYM3','SYM10','SYM0','SYM9','SYM8','SYM4','SYM6','SYM8','SYM3','SYM9','SYM4','SYM7','SYM10','SYM1','SYM4','SYM9','SYM5','SYM8','SYM3','SYM6','SYM5','SYM7','SYM6','SYM2','SYM10','SYM6'],
    //    ['SYM5','SYM6','SYM4','SYM8','SYM4','SYM5','SYM9','SYM2','SYM4','SYM6','SYM10','SYM5','SYM3','SYM8','SYM7','SYM5','SYM9','SYM2','SYM4','SYM6','SYM10','SYM5','SYM3','SYM8','SYM1','SYM10','SYM2','SYM9','SYM8','SYM4','SYM3','SYM9','SYM4','SYM0','SYM9','SYM5','SYM6','SYM9','SYM5','SYM7','SYM3','SYM5','SYM6','SYM4','SYM8','SYM4','SYM7','SYM9','SYM2','SYM4','SYM6','SYM10','SYM5','SYM3','SYM9','SYM7','SYM3']
    //],
    reelStrip : [
        ['SYM6','SYM2','SYM7','SYM3','SYM5','SYM2','SYM3','SYM9','SYM4','SYM10'],
        ['SYM0','SYM7','SYM6','SYM5','SYM4','SYM2','SYM7','SYM4','SYM8','SYM9'],
        ['SYM10','SYM4','SYM3','SYM9','SYM6','SYM2','SYM10','SYM6','SYM5','SYM7'],
        ['SYM8','SYM3','SYM7','SYM5','SYM10','SYM9','SYM2','SYM8','SYM7','SYM6'],
        ['SYM5','SYM6','SYM4','SYM8','SYM4','SYM5','SYM9','SYM2','SYM4','SYM6']
    ],
    row : 3,
    betIndicators : [{x : 20, y : 20}, {x : 20, y : 30}, {x : 20, y : 40}],  //x,y - coordinates of center betIndicators
    betLines : [{x : 50, y : 20, color : 'green'}, {x : 50, y : 50, color : 'red'}, {x : 50, y : 80, color : 'blue'}], // x,y - coordinate of beginning line
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

