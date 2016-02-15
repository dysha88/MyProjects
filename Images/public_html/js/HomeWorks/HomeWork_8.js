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

// Create constructor of class Background to background for canvas
function Background(xStart, yStart, xEnd, yEnd, color1, color2, color3, xRect, yRect, width, height) {
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
    this.draw = function (ctx) {
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
    this.update = function () {

    };
}
;

// Creating constructor of class Texture to describe the image which can move on canvas
function Texture(fileName) {
    var me = this;
    this.x = 0;
    this.y = 0;
    this.width = 150;
    this.height = 150;
    this.rotation = 0;
    this.maxSpeed = 5;
    this.currentSpeed = 0;
    this.aceleration = 0.25;
    this.loaded = false;
// Creating object property 'controls' which contain object with keyboard buttons property
    this.controls = {
        key37: false, //left
        key38: false, //up
        key39: false, //right
        key40: false, //back 
        key32: false //FIRE!!! Space
    };
// Creating property 'image' which is an exemplar of class Image    
    this.image = new Image();
// Create new method 'onload' to change loaded value if image was loaded   
    this.image.onload = function () {
        me.loaded = true;
    };
// Creating new image property 'src' to set path to our image
    this.image.src = fileName;
    // Creating 'update' method which can change the position of texture by clicking the key  
    this.update = function () {
// move up
        if (me.controls.key38) {
            me.moveForward();
        } else {
            me.deaccelerate();
        }
// move back
        if (me.controls.key40) {
            me.moveBack();
        }
// turn left
        if (me.controls.key39) {
            me.turnRight();
        }
// turn right
        if (me.controls.key37) {
            me.turnLeft();
        }
// puch the bomb    
        if (me.controls.key32) {
            fireEvent('fire', {
                x: me.x,
                y: me.y,
                direction: me.rotation
            });
        }

        me.x = me.x + Math.cos(me.rotation) * me.currentSpeed;
        me.y = me.y + Math.sin(me.rotation) * me.currentSpeed;

        me.bounceBack();

    };
// Creating method 'turnLeft' which change image direction to left  
    this.turnLeft = function () {
        me.rotation = me.rotation - 0.1;
        console.log(me.rotation);
    };
// Creating method 'turnRight' which change image direction to right      
    this.turnRight = function () {
        me.rotation = me.rotation + 0.1;
        console.log(me.rotation);
    };
// Creating method 'moveForward' which can move the image to forward      
    this.moveForward = function () {
        me.currentSpeed = me.currentSpeed + me.aceleration;
        if (me.currentSpeed > me.maxSpeed) {
            me.currentSpeed = me.maxSpeed;
        }
     };

    this.deaccelerate = function () {
        me.currentSpeed = me.currentSpeed - me.aceleration;
        if (me.currentSpeed < 0) {
            me.currentSpeed = 0;
        }
    };

// Creating method 'moveBack' which can move the image to back      
    this.moveBack = function () {
//        me.speed++;

    };
// Creating method 'bounceBack' which don't do the possibility to move our image outside the area      
    this.bounceBack = function () {
        if (me.x >= WIDTH) {
            me.x = WIDTH - 10;
        }
        if (me.x <= 0) {
            me.x = 0 + 10;
        }
        ;
        if (me.y >= HEIGHT) {
            this.image.src = 'images/boom.png';
            me.width = 100;
            me.height = 100;
            me.currentSpeed = 0;
            me.aceleration = 0;
        }
        if (me.y <= 0) {
            me.y = 0 + 10;
        }
        ;
    };
//     
    this.setKey = function (keyCode, keyState) {
        me.controls['key' + keyCode] = keyState;
    };
    this.draw = function (ctx) {
        if (me.loaded) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(me.x, me.y);
            ctx.rotate(me.rotation + 1.5);
            ctx.drawImage(me.image, -me.width / 2, -me.height / 2, me.width, me.height);
            ctx.restore();
        }
        ;
    };
}
;
// Creating constructor of class Bullet to describe the bombs and there properties
function Bullet(fileName, params) {
    var me = this;
    this.x = params.x;
    this.y = params.y;
    this.width = 50;
    this.height = 50;
    this.rotation = params.direction;
    this.speed = 5;
    this.loaded = false;
    this.image = new Image();
    this.image.onload = function () {
        me.loaded = true;
    };
    this.image.src = fileName;
    this.draw = function (ctx) {
        if (me.loaded) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(me.x, me.y);
            ctx.rotate(0);
            ctx.drawImage(me.image, -me.width / 2, -me.height, me.width, me.height);
            ctx.restore();
        }
        ;
    };
    this.update = function () {
        //    me.speed++;
        if (me.y < HEIGHT) {
            me.x = me.x + Math.cos(me.rotation) * me.speed;
            me.y = me.y + Math.sin(me.rotation) * me.speed;
            console.log(me.x, me.y);
        }
        ;
        if (me.y == HEIGHT) {
            this.image.src = 'images/boom.png';
            me.width = 80;
            me.height = 80;
        }
        ;
        if (me.y > HEIGHT) {
            me.y = HEIGHT;
        }
        ;
    };
}
;

var back = new Background(WIDTH / 2, HEIGHT, WIDTH / 2, 0, 'yellow', 'skyblue', 'lightskyblue', 0, 0, WIDTH, HEIGHT);

var plane = new Texture('images/plane.png');
var drawElements = [];
drawElements.push(back);
drawElements.push(plane);

setInterval(function () {
    context.clearRect(0, 0, 600, 600);
    for (var i = 0; i < drawElements.length; i++) {
        drawElements[i].update();
        drawElements[i].draw(context);
    }

}, 50);

document.addEventListener('keydown', function (event) {
    plane.setKey(event.keyCode, true);
});

document.addEventListener('keyup', function (event) {
    plane.setKey(event.keyCode, false);
});

var events = {
    fire: []
};

function addListener(eventName, functionCallback) {
    events[eventName].push(functionCallback);
}
;

function fireEvent(eventName, params) {
    for (var i = 0; i < events[eventName].length; i++) {
        events[eventName][i](params);
    }
    ;
}
;

addListener('fire', function (params) {
    console.log('fire event was fired', params);

    var bullet = new Bullet('images/bomb.png', params);
    drawElements.push(bullet);
});

addListener('fire', function (params) {
    console.log('Call fire sound', params);
});

