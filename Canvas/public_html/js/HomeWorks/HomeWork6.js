/*
 * ЗАДАНИЕ
 * Hеобходимо дописать класс "Circle" таким образом что бы 
 * у него был метод "update( time )" который принимает 
 * в аргументе "псевдо-время", в вашем случае counter и 
 * меняет свою позицию по одной из осей (или по обеим :) )   
 * с заданой скоростью. Скорость является полем обьекта, 
 * можно её необходимо инициализировать в конструкторе и 
 * можно менять методом "setSpeed".
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
    this.update = function(time){
        
        time++;
        console.log(time);
        context.clearRect(0, 0, canvas.width, canvas.height);
        me.setPosition(30, time*me.speed);
        me.draw(context);
        window.requestAnimationFrame(me.update);
        
    };
};

var circle = new Circle(300, 300, 30, 0, 7);
circle.setColor('blue');
circle.setWidth(5);
circle.setSpeed(0.1);

circle.update(0);

//circle.draw(context);


