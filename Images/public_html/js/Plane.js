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

