
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

function Rules(x, y, width, height) {
    var me = this;
    this.messages = [];
    this.addMessage = function (message) {
        me.messages.push(message);
    };
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = 'red';
    this.lineWidth = 3;
    this.lineHeight = 20;


    this.draw = function (ctx) {
        var tempObj,
                maxTextWidth = 0;

        ctx.save();

        ctx.font = '11pt Calibri';
        ctx.fillStyle = 'black';
        for (i = 0; i < me.messages.length; i++) {
            ctx.fillText(me.messages[i], me.x + 10, me.y + 15 + i * 20);

            tempObj = ctx.measureText(me.messages[i]);

            if (tempObj.width > maxTextWidth) {
                maxTextWidth = tempObj.width;
            }
        }
        ;

        ctx.beginPath();
        ctx.rect(me.x, me.y, maxTextWidth + 20, me.lineHeight * me.messages.length);
        ctx.strokeStyle = me.color;
        ctx.lineWidth = me.lineWidth;
        ctx.stroke();

        ctx.restore();
    };
    this.update = function () {

    };
}
;

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
    this.radius = Math.sqrt(10000);
    this.type = 'plane';
    this.width = 150;
    this.height = 250;
    this.rotation = 0;
    this.maxSpeed = 8;
    this.currentSpeed = 0;
    this.aceleration = 0.25;
    this.aceleration1 = 0.1;
    this.loaded = false;
// Creating object property 'controls' which contain object with keyboard buttons property
    this.controls = {
        key37: false, //left
        key38: false, //up
        key39: false, //right
        key40: false, //back 
        key32: false, //FIRE!!! Space
        key17: false, //bomb!!!! Alt
        button1: false
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
// push the bomb
        if (me.controls.key17) {
            fireEvent('drop', {
                x: me.x,
                y: me.y,
                direction: me.rotation
            });
        }
        if (me.controls.button1) {
            me.moveTo();
        }

        me.x = me.x + Math.cos(me.rotation) * me.currentSpeed;
        me.y = me.y + Math.sin(me.rotation) * me.currentSpeed;

        me.bounceBack();

    };
// Creating method 'turnLeft' which change image direction to left  
    this.turnLeft = function () {
        me.rotation = me.rotation - 0.1;
    };
// Creating method 'turnRight' which change image direction to right      
    this.turnRight = function () {
        me.rotation = me.rotation + 0.1;
    };
// Creating method 'moveForward' which can move the image to forward      
    this.moveForward = function () {
        me.currentSpeed = me.currentSpeed + me.aceleration;
        if (me.currentSpeed > me.maxSpeed) {
            me.currentSpeed = me.maxSpeed;
        }
    };

    this.deaccelerate = function () {
        me.currentSpeed = me.currentSpeed - me.aceleration1;
        if (me.currentSpeed < 0) {
            me.currentSpeed = 0;
        }
    };

// Creating method 'moveBack' which can move the image to back      
    this.moveBack = function () {

    };
// Creating method 'bounceBack' which don't do the possibility to move our image outside the area      
    this.bounceBack = function () {
        if (me.x >= WIDTH) {
            me.x = WIDTH;
        }
        if (me.x <= 0) {
            me.x = 0 + 5;
        }
        ;
        if (me.y + me.height / 2 >= HEIGHT) {
            this.image.src = 'images/boom.png';
            me.width = 150;
            me.height = 150;
            me.y = HEIGHT - me.height / 2;
            me.currentSpeed = 0;
            me.aceleration = 0;
            me.rotation = -1.5;
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

    this.setButton = function (keyCode, keyState) {
        me.controls['button' + keyCode] = keyState;
    };
    this.moveTo = function (xPosition, yPosition) {
        me.x = xPosition;
        me.y = yPosition;
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
// Creating constructor of class Bullet to describe the bullets and there properties
function Bullet(fileName, params) {
    var me = this;
    this.x = params.x;
    this.y = params.y;
    this.width = 10;
    this.height = 30;
    this.radius = Math.sqrt(1000);
    this.type = 'bullet';
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
            ctx.rotate(me.rotation);
            ctx.drawImage(me.image, me.width, me.height, me.width, me.height);
            ctx.restore();
        }
        ;
    };
    this.update = function () {
        me.x = me.x + Math.cos(me.rotation) * me.speed;
        me.y = me.y + Math.sin(me.rotation) * me.speed;
    };
}
;

// Creating constructor of class Bomb to describe the bombs and there properties
function Bomb(fileName, params) {
    var me = this;
    this.x = params.x;
    this.y = params.y;
    this.width = 40;
    this.height = 69;
    this.radius = Math.sqrt(me.width * me.width + me.height * me.height);
    this.type = 'bomb';
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
        if (me.y < HEIGHT) {
            me.x = me.x - Math.cos(89.55) * me.speed;
            me.y = me.y - Math.sin(180.5) * me.speed;
        }
        ;
        if (me.y == HEIGHT) {
            this.image.src = 'images/boom.png';
            me.width = 50;
            me.height = 50;
        }
        ;
        if (me.y > HEIGHT) {
            me.y = HEIGHT;
        }
        ;
    };
}
;

function Circle(x, y, r) {
    var me = this;

    this.type = 'bot';
    this.x = x;
    this.y = y;
    this.radius = r;
    this.color = 'green';
    this.width = 3;
    this.draw = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(me.x, me.y, me.radius, 0, 2 * Math.PI);
        ctx.fillStyle = me.color;
        ctx.lineWidth = me.width;
        ctx.fill();
        ctx.restore();
    };
    this.update = function () {

    };
    this.setColor = function (color) {
        me.color = color;
        
    };
}
;

var back = new Background(WIDTH / 2, HEIGHT, WIDTH / 2, 0, 'yellow', 'skyblue', 'lightskyblue', 0, 0, WIDTH, HEIGHT);

var plane = new Texture('images/plane.png');
var rule = new Rules(WIDTH - 180, 10, 179, 40);
rule.addMessage('Thow Bomb: Press Ctrl');
rule.addMessage('Make piu-piu: Press Space');
var drawElements = [];
var collisionDetection = [];
collisionDetection.push(plane);
//collisionDetection.push();
drawElements.push(back);
drawElements.push(plane);
drawElements.push(rule);
for (i = 0; i < 3; i++) {
    var newCircle = new Circle(200 + 70 * i, 150 + 80 * i, 40 + 10 * i);
    drawElements.push(newCircle);
    collisionDetection.push(newCircle);
}
;

function collisionCheck() {
    var obj1, obj2, dist;
    for (var i = 0; i < collisionDetection.length; i++) {
        obj1 = collisionDetection[i];
        for (var j = 0; j < collisionDetection.length; j++) {
            obj2 = collisionDetection[j];
            if (i != j) {
                dist = Math.sqrt(Math.pow(obj1.x - obj2.x, 2) +
                        Math.pow(obj1.y - obj2.y, 2));
                //  Collision between two objects
                if (dist < obj1.radius + obj2.radius) {
                    if ((obj1.type == 'plane') && (obj2.type == 'bot')) {
                        
                        obj1.needRemove = true;
                        obj2.setColor('red');
                    }
                    if ((obj1.type == 'bomb') && (obj2.type == 'bot')) {
                        obj1.needRemove = true;
                        obj2.setColor('yellow');
                    }
                    if ((obj1.type == 'bullet') && (obj2.type == 'bot')) {
                        obj1.needRemove = true;
                        obj2.setColor('blue');
                    }
                    
                    
                    console.log('URAA');
                }
                
            }
            
        }
        ;
    }
    ;
}
;

function clearGarbage(){
    
};

setInterval(function () {
    context.clearRect(0, 0, 600, 600);
    collisionCheck();
//выкидывает все ненужные обьекты из двух массивов collision and drawElements    
    clearGarbage();
    for (var i = 0; i < drawElements.length; i++) {
        //  deleted some elements from array drawElements
//        if(drawElements.length > 50){
//            for(i = 3; i < 10; i++){
//                delete drawElements[i];
//            };
//        };
        drawElements[i].update();
        drawElements[i].draw(context);
    };
    
}, 50);

drawElements.splice();

var indexOfElementToRemove = drawElements.indexOf(objectToRemove);
drawElements.splice(indexOfElementToRemove,1);

document.addEventListener('keydown', function (event) {
    plane.setKey(event.keyCode, true);
//    console.log(event);
});

document.addEventListener('keyup', function (event) {
    plane.setKey(event.keyCode, false);
//    console.log(event);
});

document.addEventListener('mousedown', function (event) {
    event.preventDefault();
    plane.setButton(event.button, false);
    plane.moveTo(event.x, event.y);
//   console.log(event);
});

/*document.addEventListener('keypress', function (event) {
 plane.setKey(event.keyCode, false);
 //    console.log(event);
 });
 */


//var circle = new Circle(400, 150, 30);
//drawElements.push(circle);

var events = {
    fire: [],
    drop: []
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

    var bullet = new Bullet('images/bullet.png', params);
    drawElements.push(bullet);
    collisionDetection.push(bullet);
//    console.log(drawElements);
});

addListener('drop', function (params) {
    console.log('Bomb was dropped', params);

    var bomb = new Bomb('images/bomb.png', params);
    drawElements.push(bomb);
    collisionDetection.push(bomb);
});





