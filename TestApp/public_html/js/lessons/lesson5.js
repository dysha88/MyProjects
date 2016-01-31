
function Player(name){
    var newName = 'Super ' + name + '!!!';
    this.x = 0;
    this.y = 0;
    this.name = newName.toUpperCase();
}

var vasya = new Player('Vasya');

vasya.x = 110;
vasya.y = 443;

console.log(vasya);







function Player(){
    this.name = 'no name';
    this.setName = function(newName){
        if (newName !== '' && newName.length>2) {
            this.name = newName;
        }
    };
    this.getName = function() {return this.name};
}

var vasya = new Player();

vasya.setName('Vasya');

console.log(vasya.getName());






function Player(){
    this.name = 'no name';
    var counter = 0;
    this.setName = function(newName){
        if (newName !== '' && newName.length>2) {
            this.name = newName;
        }
    };
    this.getName = function() {
        
        counter++;
        return this.name;
        
    };
    this.getCounter = function (){
        return counter;
    };
}

var vasya = new Player();

vasya.setName('Vasya');
vasya.getName();
vasya.getName();

console.log(vasya.getCounter());






function Utils() {
    this.KPI = 20;
    
    function test(param){
        console.log(param);
    }
    test(323);
    
    this.testFunc = test;
}
var utls = new Utils();
utls.testFunc(654);
//utls.test(666);  //Выдаст ошибку, так как функция test находится внутри конструктора
console.log(utls);







function Utils() {
    this.KPI = 20;
    
    this.colorUtils = {
        KPI : 666,
        printKPI : function(){
            console.log(this.KPI);
        }
    };
    this.kotik = this.colorUtils.printKPI;
}
var utls = new Utils();
utls.colorUtils.printKPI();
utls.kotik();






function Utils() {
    this.KPI = 20;
    
    this.colorUtils = {
        KPI : 666,
        printKPI : prnt
    };
    this.kotik = prnt;
}
function prnt(){
    console.log(this.KPI);
}

var utls = new Utils();
utls.colorUtils.printKPI();
utls.kotik();

prnt.call(utls);  //Вызывает метод prnt внутри обьекта utls
prnt.call(utls.colorUtils);  //Вызывает метод prnt внутри обьекта utls.colorUtils





function Utils() {
    var me = this;
    this.KPI = 20;
    
    this.colorUtils = {
        KPI : 666,
        printKPI : function prnt(){
    console.log(me.KPI);
        }
    };
}

var utls = new Utils();
utls.colorUtils.printKPI();





function Slot(){
    var me = this;
    var betline = new Betline(1);
    betline.slot = this;
    this.curOutcome = ['sym7', 'sym7', 'sym7'];
    this.stopSpin = function(){
        betline.checkOutcome(me.curOutcome);
    };
}

function Betline(num){
    this.checkOutcome = function(outcome){
        console.log(this.slot.curOutcome);
    };
}

var slot = new Slot();
slot.stopSpin();








