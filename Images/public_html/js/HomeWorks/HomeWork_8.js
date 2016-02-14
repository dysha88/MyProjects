/* 
 И так, ДЗ: Создать объекты типа Текстура (чтоюы можно было 
 организовать задний фон), игрок у вас уже есть, объкты типа 
 Пуля - которая сразу после создания начинает лететь в том 
 направлении в котором смотрит игрок.
 */

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

function Background(xStart, yStart, xEnd, yEnd, color1, color2, color3, xRect, yRect, width, height){
    var me = this;
    this.grd = 0;
    this.x1 = xStart;
    this.y1 = yStart;
    this.x2 = xEnd;
    this.y2 = yEnd;
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
    this.x = xRect;
    this.y = yRect;
    this.width = width;
    this.height = height;
    this.draw = function(ctx){
        ctx.save();
        ctx.beginPath();
        me.grd = ctx.createLinearGradient(me.x1, me.y1, me.x2, me.y2);
        me.grd.addColorStop(0, me.color1);
        me.grd.addColorStop(0.5, me.color2);
        me.grd.addColorStop(1, me.color3);
        
        ctx.fillStyle = me.grd;
        ctx.fill();
        ctx.fillRect(me.x, me.y, me.width, me.height);
        ctx.closePath();
        ctx.restore();
    };
};

function Texture(fileName){
    var me = this;
    this.x = 0;
    this.y = 0;
    this.width = 150;
    this.height = 150;
    this.rotation = 0;
    this.speed = 5;
    this.loaded = false;
    this.controls = {
        key37 : false, //left
        key38 : false, //up
        key39 : false, //right
        key40 : false, //back 
        key32 : false //FIRE!!! Space
    };
    this.image = new Image();
    this.image.onload = function (){
        me.loaded = true;
    };
    this.image.src = fileName;
    this.update = function(){
    //move up
    if(me.x > -me.width/2 && me.x < WIDTH){
    if(me.controls.key38){
        me.moveUp();
    }
    //move back
    if(me.controls.key40 === true){
        me.moveDown();
    }
    //turn left
    if(me.controls.key37){
        me.turnRight();
    }
    //turn right
    if(me.controls.key39){
        me.turnLeft();        
    }
    if(me.controls.key32){
        fireEvent('fire', {
            x : me.x,
            y : me.y,
            direction : me.rotation
        });
    }
    me.bounceBack();
    };
    if(me.y > -me.height/2 && me.y < HEIGHT){
    if(me.controls.key38){
        me.moveUp();
    }
    //move back
    if(me.controls.key40 === true){
        me.moveDown();
    }
    //turn left
    if(me.controls.key37){
        me.turnRight();
    }
    //turn right
    if(me.controls.key39){
        me.turnLeft();        
    }
    if(me.controls.key32){
        fireEvent('fire', {
            x : me.x,
            y : me.y,
            direction : me.rotation
        });
    }
    me.bounceBack();
    };
    };
    this.turnLeft = function(){
        me.rotation = me.rotation - 0.1;
        console.log(me.rotation);
    };
    this.turnRight = function(){
        me.rotation = me.rotation + 0.1;
        console.log(me.rotation);
    };
    this.moveUp = function(){
 //       me.speed++;
        me.x = me.x + Math.cos(me.rotation)*me.speed;
        me.y = me.y + Math.sin(me.rotation)*me.speed;
        console.log(me.rotation);
    };
    this.moveDown = function(){
//        me.speed++;
        me.x = me.x - Math.cos(me.rotation)*me.speed;
        me.y = me.y - Math.sin(me.rotation)*me.speed;
        console.log(me.rotation);
    };
    this.bounceBack = function(){
        if(me.x >= WIDTH){
            me.x = WIDTH - 10;
        }
        if(me.x <= 0){
            me.x = 0 + 10;
        };
        if(me.y >= HEIGHT){
            me.y = HEIGHT - 10;
        }
        if(me.y <= 0){
            me.y = 0 + 10;
        };
    };
    this.setKey = function(keyCode, keyState){
        me.controls['key' + keyCode] = keyState;
    };
    this.draw = function(ctx){
        if(me.loaded){
            ctx.save();
            ctx.beginPath();
            ctx.translate(me.x, me.y);
            ctx.rotate(me.rotation + 1.5);
            ctx.drawImage(me.image, -me.width/2, -me.height/2, me.width, me.height);
            ctx.restore();
        };
    };
};

function Bullet(fileName, params){
    var me = this;
    this.x = params.x;
    this.y = params.y;
    this.width = 50;
    this.height = 50;
    this.rotation = params.direction;
    this.speed = 8;
    this.loaded = false;
    this.image = new Image();
    this.image.onload = function (){
        me.loaded = true;
    };
    this.image.src = fileName;
    this.draw = function(ctx){
        if(me.loaded){
            ctx.save();
            ctx.beginPath();
            ctx.translate(me.x, me.y);
            ctx.rotate(0);
            ctx.drawImage(me.image, -me.width/2, -me.height, me.width, me.height);
            ctx.restore();
        };
    };
    this.update = function(){
    //    me.speed++;
        if(me.y < HEIGHT){
            me.x = me.x - Math.cos(90)*me.speed;
            me.y = me.y - Math.sin(180)*me.speed;
            console.log(me.x, me.y);
    };
        if(me.y == HEIGHT){
            this.image.src = 'images/boom.png';
            me.width = 80;
            me.height = 80;
        };
        if(me.y > HEIGHT){
            me.y = HEIGHT;
        };
    };
};

var back = new Background(WIDTH/2, HEIGHT, WIDTH/2, 0, 'yellow', 'skyblue', 'lightskyblue', 0, 0, WIDTH, HEIGHT);

var plane = new Texture('images/plane.png');
var drawElements = [];
var drawElementss = [];
drawElements.push(plane);

setInterval(function(){
    context.clearRect(0, 0, 600, 600);
    for(var i = 0; i < drawElements.length; i++){
        drawElements[i].update();
        back.draw(context);
        drawElements[i].draw(context);
               
    };
    drawElementss[0].update();
    drawElementss[0].draw(context);
}, 100);

document.addEventListener('keydown', function(event){
    plane.setKey(event.keyCode, true);
});

document.addEventListener('keyup', function(event){
    plane.setKey(event.keyCode, false);
});

var events = {
    fire : []
};
function addListener (eventName, functionCallback){
    events[eventName].push(functionCallback);
};
function fireEvent(eventName, params){
    for(var i = 0; i < events[eventName].length; i++){
        events[eventName][i](params);
    };
};
addListener('fire', function(params){
    console.log('fire event was fired', params);
    
    var bullet = new Bullet('images/bomb.png',params);
    drawElementss.push(bullet);
});
addListener('fire', function(params){
    console.log('Call fire sound', params);
});

