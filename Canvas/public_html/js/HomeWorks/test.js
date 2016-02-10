
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function Circle(x, y, r){
    var me = this;
    this.x = x;
    this.y = y;
    this.r = r;
    this.width = 0;
    this.heigth = 0;
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
    this.speedX = parseInt(Math.random()*10) + 1;
    this.speedY = parseInt(Math.random()*10) + 1;
    this.setArea = function (width, height){
        me.width = width;
        me.height = height;
    };
    var time = 0;
    this.update = function(ctx){
        
        if((me.x + me.speedX > me.width) || (me.x + me.speedX< 0)){
            me.speedX = -me.speedX;
            me.setPosition(me.x + me.speedX, me.y + me.speedY);
            me.draw(ctx);
       
        };
        if((me.y + me.speedY > me.height) || (me.y + me.speedY < 0)){
            me.speedY = -me.speedY;
            me.setPosition(me.x + me.speedX, me.y + me.speedY);
            me.draw(ctx);
            
        };
        me.setPosition(me.x + me.speedX, me.y + me.speedY);
        me.draw(ctx);
    };
    this.redraw = function(){
        time++;
        console.log(time);
        me.update(context);
    };
};

var arr = [];
var i;
for(i = 0; i < 30; i++){
    var circle = new Circle(150+i*7, 150+i*2, 20);
    arr.push(circle);
    arr[i].setArea(canvas.width, canvas.height);
    
};
console.log(arr);

function move(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(i = 0; i < arr.length; i++){
        arr[i].redraw();

        
    };
    window.requestAnimationFrame(move);
};
move();



