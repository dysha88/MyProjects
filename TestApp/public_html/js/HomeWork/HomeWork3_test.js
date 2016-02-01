/*ЗАДАНИЕ*****
 * Cоздать 3-4 класса, в конструкторе которых вы будете назначать 
 * объектам свойства и методы. Один из классов будет создавать объект 
 * включающий в себя объекты других классов, такой себе супер важный 
 * объект. Абстракция любая на выбор: дом (массив объектов окон, дверей, 
 * мебели), автомобиль, мобильный телефон, можете так же попробовать 
 * создать абстракцию слот игры (массив рилов состоит из объектов 
 * символов, с которыми можно взаимодействовать, массив бетлиний, методы 
 * спинСтарт и спинСтоп, квикСтоп, сетАуткам)
 */


// Create new object 'slot' from class Slot
var slot = new Slot('videoSlot',3,3);

//Describe Constructor for objects from class Slot
function Slot(gameName, reelsNum, symNum) {
    //Add properties to the Constructor (for ex., add few new objects)
    this.reels = [];
    
    for(var i= 0; i<reelsNum; i++){
        this.reels.push(new Reel(symNum));
    }
    
    this.reels = new Reels();
    this.betLines = new BetLines();
    this.spin = new Spin();
    this.brand = 'NetEnt';
    this.gameName = gameName;
    this.numOfReels = '5x3';
    this.numOfBetLines = 25;
    
    this.spiiiin = function(){
        //this.reels
    };
}

/**
 * Comment
 */
function Reel(symNum) {
    this.symbols = [];
    
    for(var i= 0; i<symNum; i++){
        this.symbols.push(new Symbol());
    }
}

function Symbol(){
    this.payout = 5;
}

//Describe Constructor for objects from class Reels
function Reels() {
    this.symbols = new Symbols();
    this.reel1 = [['sym1', 'sym2', 'sym3', 'sym4'], [1, 2, 3]];
    this.reel2 = [['sym3', 'sym7', 'sym6', 'sym4'], [1, 2, 3]];
    this.reel3 = [['sym5', 'sym3', 'sym9', 'sym4'], [1, 2, 3]];
    this.reel4 = [['sym6', 'sym12', 'sym10', 'sym3'], [1, 2, 3]];
    this.reel5 = [['sym8', 'sym12', 'sym3', 'sym0'], [1, 2, 3]];
    this.rand1 = this.reel1[[Math.floor(Math.random() * this.reel1.length)], [Math.floor(Math.random() * this.reel1.length)]];
    this.rand2 = this.reel2[Math.floor(Math.random() * this.reel2.length)];
    this.rand3 = this.reel3[Math.floor(Math.random() * this.reel3.length)];
    this.rand4 = this.reel4[Math.floor(Math.random() * this.reel4.length)];
    this.rand5 = this.reel5[Math.floor(Math.random() * this.reel5.length)];

}
//Describe Constructor for objects from class Symbols
function Symbols() {
    this.lowSymbols = ['sym8', 'sym9', 'sym10', 'sym11', 'sym12'];
    this.mediumSymbiols = ['sym3', 'sym4', 'sym5', 'sym6', 'sym7'];
    this.wild = 'sym1';
    this.scatter = 'sym0';
}

//Describe Constructor for objects from class BetLines
function BetLines() {
    reels = new Reels();
    this.betVerification = function () {
        var i, j;
        r1 = reels.reel1[i, j];
        r2 = reels.reel2[i, j];
        r3 = reels.reel3[i, j];
        r4 = reels.reel4[i, j];
        r5 = reels.reel5[i, j];
        for (i = 0, j = 0; i < r1.length ; i++, ++j) {

        }
    };
   //Yura's help 
 /*   betlines = {
    //rb   0 1 2 3 4
    "1" : [1,1,1,1,1],
    "2" : [0,0,0,0,0],
    "3" : [2,2,2,2,2],
    "4" : [0,2,0,2,0]
}

function checkWin(r) {
    
    for (var i in betlines) {
        
        console.log(i);
        console.log(betlines[i][0], betlines[i][1], betlines[i][2]);
        console.log(r.reel1[betlines[i][0]], r.reel2[betlines[i][1]], r.reel3[betlines[i][2]]);
        
        if (r.reel1[betlines[i][0]] === r.reel2[betlines[i][1]] && 
            r.reel2[betlines[i][1]] === r.reel3[betlines[i][2]]) {
            console.log (i + "betline has smallWin");
        }
    }
} */
    
    r1 = reels.reel1[0, 0];
    r2 = reels.reel1[0, 0];
    r3 = reels.rand3[0, 0];
    r4 = reels.rand4;
    r5 = reels.rand5;
    this.betline1 = function () {
        if ((r1 == r2) && (r1 == r3) && (r1 == r4) && (r1 == r5)) {
            console.log('First betline was won. Congrats!');
        } else {
            console.log('First betline wasn\'t won, sorry');
        }
    };
    this.betline2 = function () {
        if ((r1 == r2) && (r1 == r3) && (r1 == r4) && (r1 == r5)) {
            console.log('Second betline was won. Congrats!');
        } else {
            console.log('Second betline wasn\'t won, sorry');
        }
    };
    this.betline3 = function () {
        if ((r1 == r2) && (r1 == r3) && (r1 == r4) && (r1 == r5)) {
            console.log('Third betline was won. Congrats!');
        } else {
            console.log('Third betline wasn\'t won, sorry');
        }
    };
}
//Describe Constructor for objects from class Spin
function Spin() {
    this.reels = new Reels();
    this.spinStart = function () {
        console.log('This method should starting the spin');

    };
    this.spinStop = function () {
        console.log('This method should stopping the spin');
    };
    this.quickStop = function () {
        console.log('This method should activate quickStop option');
    };
}
var reels = new Reels();
reels.reel1[1];

slot.spin.spinStart();
slot.spin.spinStop();
slot.spin.quickStop();
slot.reels.reel1[1];
slot.betLines.betline1();

var rand = reels.reel1[Math.floor(Math.random() * reels.reel1.length)];
console.log(rand);