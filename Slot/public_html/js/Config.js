var GAMECONFIG = {
    reelStrip : [
        ['SYM6','SYM2','SYM7','SYM3','SYM5','SYM2','SYM3','SYM9','SYM4','SYM10','SYM9','SYM2','SYM10','SYM8','SYM1','SYM0','SYM7','SYM6','SYM2','SYM5','SYM4','SYM9','SYM1','SYM8'],
        ['SYM0','SYM7','SYM6','SYM5','SYM4','SYM2','SYM7','SYM4','SYM8','SYM9','SYM5','SYM1','SYM2','SYM8','SYM4','SYM7','SYM8','SYM10','SYM6','SYM3','SYM9','SYM2','SYM4','SYM6','SYM10','SYM8','SYM3','SYM10'],
        ['SYM10','SYM4','SYM3','SYM9','SYM6','SYM2','SYM10','SYM6','SYM5','SYM7','SYM8','SYM4','SYM9','SYM1','SYM10','SYM4','SYM7','SYM5','SYM9','SYM3','SYM8','SYM6','SYM5','SYM7','SYM6','SYM9','SYM0','SYM10','SYM7','SYM5','SYM9','SYM6','SYM8','SYM2','SYM10','SYM6','SYM5','SYM7','SYM8','SYM4','SYM9','SYM1'],
        ['SYM8','SYM3','SYM7','SYM5','SYM10','SYM9','SYM2','SYM8','SYM7','SYM6','SYM3','SYM5','SYM4','SYM8','SYM3','SYM10','SYM0','SYM9','SYM8','SYM4','SYM6','SYM8','SYM3','SYM9','SYM4','SYM7','SYM10','SYM1','SYM4','SYM9','SYM5','SYM8','SYM3','SYM6','SYM5','SYM7','SYM6','SYM2','SYM10','SYM6'],
        ['SYM5','SYM6','SYM4','SYM8','SYM4','SYM5','SYM9','SYM2','SYM4','SYM6','SYM10','SYM5','SYM3','SYM8','SYM7','SYM5','SYM9','SYM2','SYM4','SYM6','SYM10','SYM5','SYM3','SYM8','SYM1','SYM10','SYM2','SYM9','SYM8','SYM4','SYM3','SYM9','SYM4','SYM0','SYM9','SYM5','SYM6','SYM9','SYM5','SYM7','SYM3','SYM5','SYM6','SYM4','SYM8','SYM4','SYM7','SYM9','SYM2','SYM4','SYM6','SYM10','SYM5','SYM3','SYM9','SYM7','SYM3']
    ],
    //reelStrip : [
    //    ['SYM2','SYM2','SYM2','SYM3','SYM2','SYM2','SYM3','SYM2','SYM4','SYM2'],
    //    ['SYM2','SYM2','SYM2','SYM5','SYM4','SYM2','SYM2','SYM4','SYM2','SYM2'],
    //    ['SYM2','SYM4','SYM3','SYM2','SYM2','SYM2','SYM2','SYM2','SYM5','SYM2'],
    //    ['SYM2','SYM3','SYM7','SYM5','SYM2','SYM2','SYM2','SYM2','SYM7','SYM6'],
    //    ['SYM5','SYM6','SYM4','SYM2','SYM4','SYM5','SYM2','SYM2','SYM4','SYM6']
    //],
    betIndicators : [{x : 100, y : 250, r : 13, color : '0', x1 : 96, y1 : 242, text : '1', transparent : 1},
                     {x : 100, y : 100, r : 13, color : '0', x1 : 96, y1 : 92, text : '2', transparent : 1},
                     {x : 100, y : 405, r : 13, color : '0', x1 : 96, y1 : 397, text : '3', transparent : 1},
                     {x : 100, y : 70, r : 13, color : '0', x1 : 96, y1 : 62, text : '4', transparent : 1},
                     {x : 100, y : 375, r : 13, color : '0', x1 : 96, y1 : 367, text : '5', transparent : 1},
                     {x : 100, y : 130, r : 13, color : '0', x1 : 96, y1 : 122, text : '6', transparent : 1},
                     {x : 100, y : 435, r : 13, color : '0', x1 : 96, y1 : 427, text : '7', transparent : 1},
                     {x : 100, y : 220, r : 13, color : '0', x1 : 96, y1 : 212, text : '8', transparent : 1},
                     {x : 100, y : 280, r : 13, color : '0', x1 : 96, y1 : 272, text : '9', transparent : 1},
                     {x : 100, y : 310, r : 13, color : '0', x1 : 91, y1 : 302, text : '10', transparent : 1},
                     {x : 1097, y : 235, r : 13, color : '0', x1 : 1088, y1 : 227, text : '11', transparent : 1},
                     {x : 100, y : 160, r : 13, color : '0', x1 : 91, y1 : 152, text : '12', transparent : 1},
                     {x : 100, y : 465, r : 13, color : '0', x1 : 91, y1 : 457, text : '13', transparent : 1},
                     {x : 1097, y : 265, r : 13, color : '0', x1 : 1088, y1 : 257, text : '14', transparent : 1},
                     {x : 1097, y : 295, r : 13, color : '0', x1 : 1088, y1 : 287, text : '15', transparent : 1},
                     {x : 1097, y : 55, r : 13, color : '0', x1 : 1088, y1 : 47, text : '16', transparent : 1},
                     {x : 1097, y : 360, r : 13, color : '0', x1 : 1088, y1 : 352, text : '17', transparent : 1},
                     {x : 1097, y : 85, r : 13, color : '0', x1 : 1088, y1 : 77, text : '18', transparent : 1},
                     {x : 1097, y : 390, r : 13, color : '0', x1 : 1088, y1 : 382, text : '19', transparent : 1},
                     {x : 1097, y : 115, r : 13, color : '0', x1 : 1088, y1 : 107, text : '20', transparent : 1},
                     {x : 1097, y : 420, r : 13, color : '0', x1 : 1088, y1 : 412, text : '21', transparent : 1},
                     {x : 1097, y : 145, r : 13, color : '0', x1 : 1088, y1 : 137, text : '22', transparent : 1},
                     {x : 1097, y : 450, r : 13, color : '0', x1 : 1088, y1 : 442, text : '23', transparent : 1},
                     {x : 1097, y : 175, r : 13, color : '0', x1 : 1088, y1 : 167, text : '24', transparent : 1},
                     {x : 1097, y : 480, r : 13, color : '0', x1 : 1088, y1 : 472, text : '25', transparent : 1}
    ],  //x,y - coordinates of center betIndicators
    betLines : [{x : 110, y : 250, width : 7, x1 : 240, y1 : 265, x2 : 970, y2 : 265},
                {x : 110, y : 100, width : 7, x1 : 240, y1 : 110, x2 : 970, y2 : 110},
                {x : 110, y : 405, width : 7, x1 : 240, y1 : 425, x2 : 970, y2 : 425},
                {x : 110, y : 70, width : 7, x1 : 240, y1 : 110, x2 : 615, y2 : 425, x3 : 970, y3 : 110},
                {x : 110, y : 375, width : 7, x1 : 240, y1 : 425, x2 : 615, y2 : 110, x3 : 970, y3 : 425},
                {x : 110, y : 130, width : 7, x1 : 240, y1 : 110, x2 : 420, y2 : 110, x3 : 615, y3 : 265, x4 : 780, y4 : 110, x5 : 970, y5 : 110},
                {x : 110, y : 435, width : 7, x1 : 240, y1 : 425, x2 : 420, y2 : 425, x3 : 615, y3 : 265, x4 : 780, y4 : 425, x5 : 970, y5 : 425},
                {x : 110, y : 220, width : 7, x1 : 240, y1 : 265, x2 : 420, y2 : 425, x3 : 780, y3 : 425, x4 : 970, y4 : 265},
                {x : 110, y : 280, width : 7, x1 : 240, y1 : 265, x2 : 420, y2 : 110, x3 : 780, y3 : 110, x4 : 970, y4 : 265},
                {x : 110, y : 310, width : 7, x1 : 240, y1 : 265, x2 : 420, y2 : 110, x3 : 615, y3 : 265, x4 : 780, y4 : 110, x5 : 970, y5 : 265},
                {x : 1107, y : 235, width : 7, x5 : 240, y5 : 265, x4 : 420, y4 : 425, x3 : 615, y3 : 265, x2 : 780, y2 : 425, x1 : 970, y1 : 265},
                {x : 110, y : 160, width : 7, x1 : 240, y1 : 110, x2 : 420, y2 : 265, x3 : 615, y3 : 110, x4 : 780, y4 : 265, x5 : 970, y5 : 110},
                {x : 110, y : 465, width : 7, x1 : 240, y1 : 425, x2 : 420, y2 : 265, x3 : 615, y3 : 425, x4 : 780, y4 : 265, x5 : 970, y5 : 425},
                {x : 1107, y : 265, width : 7, x5 : 240, y5 : 265, x4 : 420, y4 : 265, x3 : 615, y3 : 110, x2 : 780, y2 : 265, x1 : 970, y1 : 265},
                {x : 1107, y : 295, width : 7, x5 : 240, y5 : 265, x4 : 420, y4 : 265, x3 : 615, y3 : 425, x2 : 780, y2 : 265, x1 : 970, y1 : 265},
                {x : 1107, y : 55, width : 7, x4 : 240, y4 : 110, x3 : 420, y3 : 265, x2 : 780, y2 : 265, x1 : 970, y1 : 110},
                {x : 1107, y : 360, width : 7, x4 : 240, y4 : 425, x3 : 420, y3 : 265, x2 : 780, y2 : 265, x1 : 970, y1 : 425},
                {x : 1107, y : 85, width : 7, x3 : 240, y3 : 110, x2 : 615, y2 : 425, x1 : 970, y1 : 425},
                {x : 1107, y : 390, width : 7, x3 : 240, y3 : 425, x2 : 615, y2 : 110, x1 : 970, y1 : 110},
                {x : 1107, y : 115, width : 7, x5 : 240, y5 : 110, x4 : 420, y4 : 425, x3 : 615, y3 : 110, x2 : 780, y2 : 425, x1 : 970, y1 : 110},
                {x : 1107, y : 420, width : 7, x5 : 240, y5 : 425, x4 : 420, y4 : 110, x3 : 615, y3 : 425, x2 : 780, y2 : 110, x1 : 970, y1 : 425},
                {x : 1107, y : 145, width : 7, x4 : 240, y4 : 110, x3 : 420, y3 : 425, x2 : 780, y2 : 425, x1 : 970, y1 : 110},
                {x : 1107, y : 450, width : 7, x4 : 240, y4 : 425, x3 : 420, y3 : 110, x2 : 780, y2 : 110, x1 : 970, y1 : 425},
                {x : 1107, y : 175, width : 7, x5 : 240, y5 : 110, x4 : 420, y4 : 110, x3 : 615, y3 : 425, x2 : 780, y2 : 110, x1 : 970, y1 : 110},
                {x : 1107, y : 480, width : 7, x5 : 240, y5 : 425, x4 : 420, y4 : 425, x3 : 615, y3 : 110, x2 : 780, y2 : 425, x1 : 970, y1 : 425}
    ], // x,y - coordinates of the begin of line, x1..4,y1..4 - coordinates of the end of line
    payOut : [{sym : 'SYM0', x2 : 4, x3 : 21, x4 : 75},
              {sym : 'SYM1', x2 : 200, x3 : 1800, x4 : 5500},
              {sym : 'SYM2', x2 : 30, x3 : 1, x4 : 1},
              {sym : 'SYM3', x2 : 50, x3 : 50, x4 : 400},
              {sym : 'SYM4', x2 : 15, x3 : 60, x4 : 175},
              {sym : 'SYM5', x2 : 15, x3 : 60, x4 : 275},
              {sym : 'SYM6', x2 : 10, x3 : 40, x4 : 75},
              {sym : 'SYM7', x2 : 5, x3 : 45, x4 : 50},
              {sym : 'SYM8', x2 : 5, x3 : 20, x4 : 75},
              {sym : 'SYM9', x2 : 2, x3 : 13, x4 : 60},
              {sym : 'SYM10', x2 : 2, x3 : 13, x4 : 60}],
    //style for Bet and Coins texts in Keypad
    textStyle : {font : '15px Times New Roman',
        fill : '#ADFF2F',
        stroke : '#ADFF2F',
        strokeThickness : 0.6
        //dropShadow : true,
        //dropShadowColor : '#000000',
        //dropShadowAngle : Math.PI / 6,
        //dropShadowDistance : 6,
        //wordWrap : true,
        //wordWrapWidth : 240
    },
    //style for Coin value and Bet level texts
    textStyle1 : {font : '18px Times New Roman',
        fill : '#228B22',
        stroke : '#228B22',
        strokeThickness : 1.5
    },
    //style for texts from game panel
    textStyle2 : {font : '15px Arial',
        fill : '#F7EDCA'
    },
    //style for BigWin texts
    textStyle3 : {font : 'bold italic 90px Arial',
        fill : '#228B22',
        stroke : '#000000',
        strokeThickness : 3
    },
    row : 3,
    reelsOffsetX : 150,
    reelsOffsetY : 30,
    spinButtonX : 610,
    spinButtonY : 590,
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

