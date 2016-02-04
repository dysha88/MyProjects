var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function Line (x, y, length, angle) {
    var me = this;
    
    this.x1 = x;
    this.y1 = y;
    this.x2 = x + Math.cos(angle*Math.PI/180)*length;
    this.y2 = y + Math.sin(angle*Math.PI/180)*length;
    this.color;
    this.width;
    this.rotation;
    this.draw = function(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.rotate(me.rotation*Math.PI/180); 
        ctx.moveTo(me.x1, me.y1);
        ctx.lineTo(me.x2, me.y2);
        ctx.strokeStyle = me.color;
        ctx.lineWidth = me.width;
        
        ctx.stroke();
        ctx.restore();
    };
    this.setColor = function(newColor) {
        me.color = newColor;
    };
    this.setWidth = function(newWidth) {
        me.width = newWidth;
    };
    this.setRotation = function(newRotation) {
        me.rotation = newRotation;
    };
};

function Circle (x, y, r, startAngle, endAngle) {
    var me = this;
    
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAng = startAngle;
    this.endAng = endAngle;
    this.color = 'black';
    this.width = 5;
    this.draw = function(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.arc(me.x, me.y, me.r, me.startAng, me.endAng);
        ctx.strokeStyle = me.color;
        ctx.lineWidth = me.width;
        ctx.stroke();
        ctx.restore();
    };
    this.setColor = function(newColor) {
        return me.color = newColor;
    };
    this.setWidth = function(newWidth) {
        me.width = newWidth;
    };
    this.setPosition = function(x, y) {
        me.x = x;
        me.y = y;
    };
    
};

function Rectungle (x, y, width, height) {
    var me = this;
    
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = '';
    this.lineWidth = '';
    this.draw = function(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(me.x, me.y, me.width, me.height);
        ctx.strokeStyle = me.color;
        ctx.lineWidth = me.lineWidth;
        ctx.fillStyle = me.color;
        ctx.stroke();
        ctx.fill();
        ctx.restore();
    };
    this.setColor = function(newColor) {
        me.color = newColor;
    };
    this.setLineWidth = function(newLineWidth) {
        me.lineWidth = newLineWidth;
    };
    
};

var arr = [];
var i = 0;

for(i = 0; i<5; i++) {
    var circle = new Circle(i*20+10, i*30+20, i*15+15, 0, 7);
//    circle.setPosition(i*10+10, i*20+20);
    arr.push(circle);    
    arr[arr.length - 1].draw(context);
};

for(i = 0; i<3; i++) {
    
    arr[i].setPosition(i*10+10, i*20+20);
    arr[i].draw(context);
};
var counter = 0;
function update(){
    counter++;
    console.log(counter);
    redraw();
    window.requestAnimationFrame(update);
};
update();


function redraw(){
       context.clearRect(0, 0, canvas.width, canvas.height);
    for(i = 0; i<5; i++){
        arr[i].setPosition(counter*1, counter*0,2+80);
        arr[i].draw(context);
    };
};
/*window.requestAnimationFrame(function(){
    counter++;
    console.log(counter);
});*/
//console.log(arr);

/*var line1 = new Line(0, 0, 750, 45);
line1.setColor('grey');
line1.setWidth(3);
line1.setRotation(0);
line1.draw(context);

var line2 = new Line(0, 500, 750, 315);
line2.setColor('green');
line2.setWidth(3);
line2.setRotation(0);
line2.draw(context);


var circle = new Circle(250, 250, 150, 0, 7);
circle.setWidth(5);
circle.setColor('red');
circle.draw(context);


var rectungle = new Rectungle(145, 145, 210, 210);
rectungle.setColor('blue');
rectungle.setLineWidth(4);
rectungle.draw(context);
*/

