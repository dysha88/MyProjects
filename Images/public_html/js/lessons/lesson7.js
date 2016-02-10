var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function Texture(fileName){
    var me = this;
    //флаг, который мы определяем в конструкторе
    this.loaded = false; 
    this.image = new Image();
    //определяем анонимную функцию
    this.image.onload = function (){
        me.loaded = true;
    };
    this.image.src = fileName;
    this.x = 0;
    this.y = 0;
    this.setPosition = function (x, y){
        me.x = x;
        me.y = y;
    }
    this.draw = function(ctx){
        if(me.loaded){
            ctx.save();
            ctx.beginPath();
            ctx.rotate(0);
            ctx.drawImage(me.image, me.x, me.y, 100, 100);
            ctx.restore();
        };
        
        
    };
    
};

var texture1 = new Texture('images/img1.png');
var texture2 = new Texture('images/img2.png');
//функция, которая вызовет нашу анонимную функцию один раз через какое-то определенное время
/*setTimeout(function(){
    texture1.setPosition(50, 50);
    texture1.draw(context);
    texture2.setPosition(250,250);
    texture2.draw(context);
}, 500);
*/

setInterval(function(){
    context.clearRect(0, 0, 500, 500);
    texture1.x = 50;
    texture1.y = 50;
    texture1.draw(context);
    //texture2.setPosition(250,50);
    texture2.draw(context);
}, 100);

document.addEventListener('keydown', function(event){
    console.log(event);
    if(event.keyCode === 38){
        
        //plane.moveUp();
        texture2.y = texture2.y - 10;
        console.log(texture2.y);
    }
    if(event.keyCode === 40){
        texture2.y = texture2.y + 10;
        console.log(texture2.y);
    }
});


var direction = 45;
var x = 50;
var y = 50;
var step = 5;

x = x + Math.cos(direction*Math.PI/180)*step;
y = y + Math.sin(direction*Math.PI/180)*step;

