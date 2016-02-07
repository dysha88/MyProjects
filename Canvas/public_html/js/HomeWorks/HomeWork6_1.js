/*
 * ЗАДАНИЕ
 * Hеобходимо дописать класс "Circle" таким образом что бы 
 * у него был метод "update( time )" который принимает 
 * в аргументе "псевдо-время", в вашем случае counter и 
 * меняет свою позицию по одной из осей (или по обеим :) )   
 * с заданой скоростью. Скорость является полем обьекта, 
 * можно её необходимо инициализировать в конструкторе и 
 * можно менять методом "setSpeed".
 * 
 * ДОП ЗАДАНИЕ
 * Сделать массив обьектов Circle с 10 такими обьектами и 
 * сделать так что бы они двигались в случайном направлении и 
 * случайной скоростью, которая задается в конструкторе. 
 * Для случайного числа использовать Math.random()
 */


var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function Circle (x, y, r, startAngle, endAngle) {
    var me = this;
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.color = '';
    this.width = 0;
    this.speed = 0;
    this.draw = function(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.arc(me.x, me.y, me.r, me.startAngle, me.endAngle);
        ctx.strokeStyle = me.color;
        ctx.lineWidth = me.width;
        ctx.stroke();
        ctx.restore();
    };
    this.setColor = function(newColor){
        me.color = newColor;
    };
    this.setWidth = function(newWidth){
        me.width = newWidth;
    };
    this.setPosition = function(x1, y1){
        me.x = x1;
        me.y = y1;
    };
    this.setSpeed = function(newSpeed){
        me.speed = newSpeed;
    };
    this.setRandomSpeed = function(){
        me.speed = Math.random()*10;
    };
    this.setRandomXPosition = function(min, max){
        me.x = Math.random()*(max - min) + min;
        return me.x;
        
    };
    this.setRandomYPosition = function(min, max){
        me.y = Math.random()*(max - min) + min;
        return me.y;
    };
    this.time = 0;
    this.x1 = 0;
    this.y1 = Math.random()*100;
    this.redraw = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        me.setPosition(me.time*me.speed + me.x1, me.time*me.speed + me.y1);
        console.log(me.x, me.y);
        console.log(me.speed);
        me.draw(context);
    };
    this.update = function(){
        me.time++;
//        console.log(time);
        me.redraw();
        window.requestAnimationFrame(me.update);
        
    };
};

var arr = [];
var i = 0;
for(i; i < 10; i++) {
    var circle = new Circle(i*2+10, i*3+20, i*1+25, 0, 7);
    arr.push(circle);
    arr[i].draw(context);
    arr[i].setRandomSpeed();
    arr[i].setPosition(Math.random()*100, Math.random()*100);
    arr[i].update();
};








/*var circle = new Circle(150, 150, 30, 0, 7);
circle.setColor('blue');
circle.setWidth(5);
//circle.setSpeed(0.1);
circle.setRandomSpeed();
//circle.setRandomPosition(0,350);

circle.update(0);

//circle.draw(context);*/


