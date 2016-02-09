
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function Circle(x, y, r){
    var me = this;
    this.x = x;
    this.y = y;
    this.r = r;
    this.arrColor = ['green', 'blue', 'red', 'black', 'yellow'];
    this.color = me.arrColor[parseInt(Math.random()*6)];
    this.draw = function(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.arc(me.x, me.y, me.r, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fillStyle = me.color;
        ctx.fill();
        ctx.restore();
    };
    this.setPosition = function(x1, y1){
        me.x = x1;
        me.y = y1;
    };
    this.x1 = Math.random();
    this.y1 = Math.random();
    this.speed = parseInt(Math.random()*10);
    var time = 0;
    this.redraw = function(){
        context.clearRect(0, 0, canvas.width, canvas.height);
        me.setPosition(me.x + time*me.x1*me.speed, me.y + time*me.y1*me.speed);
        me.draw(context);
//        window.requestAnimationFrame(me.redraw);
        
    };
    this.update = function(){
        time++;
        console.log(time);
        console.log(me.speed);
        me.redraw();
        window.requestAnimationFrame(me.update);
    };
};

var arr = [];
var i;
for(i = 0; i < 3; i++){
    var circle = new Circle(150+i*70, 150+i*20, 30);
    arr.push(circle);
    arr[i].draw(context);
};
console.log(arr);
/*for(i = 0; i < 3; i++){
    arr[i].redraw();
    arr[i].update();
};*/
var circle = new Circle(150, 150, 30);
circle.update();


