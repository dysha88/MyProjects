var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function Line (x, y, length) {
    var me = this;
    
    this.x1 = x;
    this.y1 = y;
    this.x2 = x + length;
    this.y2 = y + length;
    this.draw = function(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(me.x1, me.y1);
        ctx.lineTo(me.x2, me.y2);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 20;
        ctx.stroke();
        ctx.restore();
    };
    
};

function Circle (x, y, r, startAngle, endAngle) {
    var me = this;
    
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAng = startAngle;
    this.endAng = endAngle;
    this.draw = function(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.arc(me.x, me.y, me.r, me.startAng, me.endAng);
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();
    };
};

function Rectungle (x, y, width, height) {
    var me = this;
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.draw = function(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(me.x, me.y, me.width, me.height);
        ctx.strokeStyle = 'yellow';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();
    };
};

var line = new Line(0, 0, 200);
line.draw(context);

var circle = new Circle(150, 150, 132, 0, 7);
circle.draw(context);

var rectungle = new Rectungle(350, 350, 150, 150);
rectungle.draw(context);