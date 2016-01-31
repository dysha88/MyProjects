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
var slot = new Slot();

//Describe Constructor for objects from class Slot
function Slot() {
    //Add 
    this.reels = new Reels();
    this.betLines = new BetLines();
    this.spin = new Spin ();
}

function Reels() {
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

function BetLines() {
    reels = new Reels();
    r1 = reels.rand1;
    r2 = reels.rand2;
    r3 = reels.rand3;
    r4 = reels.rand4;
    r5 = reels.rand5;
    this.betline1 = function(){
        if((r1 == r2) && (r1 == r3) && (r1 == r4) && (r1 == r5)) {
            console.log('First betline was won. Congrats!');
        } else {
            console.log('First betline wasn\'t won, sorry');
        }
    };
    this.betline2 = function(){
        if((r1 == r2) && (r1 == r3) && (r1 == r4) && (r1 == r5)) {
            console.log('Second betline was won. Congrats!');
        } else {
            console.log('Second betline wasn\'t won, sorry');
        }
    };
    this.betline3 = function(){
        if((r1 == r2) && (r1 == r3) && (r1 == r4) && (r1 == r5)) {
            console.log('Third betline was won. Congrats!');
        } else {
            console.log('Third betline wasn\'t won, sorry');
        }
    };
}

function Spin() {
    this.reels = new Reels();
    this.spinStart = function() {
        console.log('This method should starting the spin');
        
    };
    this.spinStop = function() {
        console.log('This method should stopping the spin');
    };
    this.quickStop = function() {
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