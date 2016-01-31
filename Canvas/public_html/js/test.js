var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

/*context.beginPath();
context.moveTo(20,20);
context.lineTo(50,66);
context.strokeStyle = 'green';
context.lineWidth =50;*/
/*for(var x=50, y=66; x<600, y<600;){
    x+= 10;
    y+= 15;
    context.lineTo(x,y);
}*/
//context.lineTo(x,y);
//context.stroke();//метод stroke выводит все что мы написали на экран

//FIRST METHOD
/*
function Line(x1, y1, x2, y2){
    var me = this;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = 'black';
    this.width = 10;
    this.rotation = 15;
    this.draw = function(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.rotate(me.rotation*Math.PI/180); 
        ctx.moveTo(me.x1,me.y1);
        ctx.lineTo(me.x2,me.y2);
        ctx.strokeStyle = me.color;
        ctx.lineWidth = me.width;
        
        ctx.stroke();
        ctx.restore();
    };
    this.setColor = function(newColor){
        me.color = newColor;
    };
    this.setWidth = function(newWidth) {
        me.width = newWidth;
    };
    this.setRotation = function(newRotation) {
        me.rotation = newRotation;
    };
}


var line = new Line(10,10,220,220);
line.setColor('yellow');
line.setWidth(15);
line.setRotation(-30);
line.draw(context); */



//OTHER METHOD

function Line(x, y, length, angle){
    var me = this;
       
    this.x1 = x;
    this.y1 = y;
    this.x2 = x + Math.cos(angle*Math.PI/180)*length;
    this.y2 = y + Math.sin(angle*Math.PI/180)*length;
    this.color = 'black';
    this.width = 10;
    this.rotation = 15;
    this.draw = function(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.rotate(me.rotation*Math.PI/180); 
        ctx.moveTo(me.x1,me.y1);
        ctx.lineTo(me.x2,me.y2);
        ctx.strokeStyle = me.color;
        ctx.lineWidth = me.width;
        
        ctx.stroke();
        ctx.restore();
    };
    this.setColor = function(newColor){
        me.color = newColor;
    };
    this.setWidth = function(newWidth) {
        me.width = newWidth;
    };
    this.setRotation = function(newRotation) {
        me.rotation = newRotation;
    };
}


var line = new Line(50,50,600,45);
line.setColor('yellow');
line.setWidth(15);
//line.setRotation(-30);
line.draw(context);