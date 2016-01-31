var test = {
  name : 'Andrey',
  hello : function() {
      
  }
};

var BuhUtils = {
    NDS : 0.2,
    calcNDS : function(amount) {
        var result = 0;
        result = amount * this.NDS;
        return result;
    }
};

console.log(BuhUtils.calcNDS(1255));



var car1 = newCar(4, 180, 'McQuin');

function newCar() {
    return {
        wheels : 4,
        maxSpeed : 180,
        name : 'McQuin'
    };
}

function newCar(wheels, maxSpeed, name) {
    var result = {
        wheels : wheels,
        maxSpeed : maxSpeed,
        name : name
    };
    return result;
}


var car1 = new Car();  // создать обьект на основе прототипа
car1.SumwunSpeshal = 'indian name';
car1.nastya = function (){
    console.log('Hello Kvlchk!');
};

function Car(){   // создать конструктор оббьектов для класса Car
    //code of Constructor
    
    this.wheels = 4;
}
console.log(car1);


var car1 = new Car(4);  
var car2 = new Car(6);

function Car(wheels){  
    //code of Constructor
    this.wheels = wheels;
    this.drindrin = function() {
        console.log(this.wheels);
    };
}

console.log(car1);






function Car(wheels){  
    //code of Constructor
    this.wheels = wheels;

}

Car.prototype.drindrin = function() {
    console.log(this.wheels);
};

var car1 = new Car(4);  
var car2 = new Car(6);

console.log(car1);





var car1 = new Car(4);  
var car2 = new Car(6);

function Car(wheels){  
    //code of Constructor
    this.wheels = wheels;
    this.drindrin = function() {
        console.log(this.wheels);
    };
}

var arr = [];
arr.push(new Car(4), new Car(10));




var car1 = new Car(4);  
var car2 = new Car(6);

function Car(wheels){  
    //code of Constructor
    this.wheels = [new Tire(14), new Tire(14)];
    this.outMyTires = function() {
        for(var i = 0; i < this.wheels.length; i++){
            this.wheels[i].seyHello();
        }
    };
    this.drindrin = function() {
        console.log(this.wheels);
    };
}

var arr = [];
arr.push(new Car(4), new Car(10));