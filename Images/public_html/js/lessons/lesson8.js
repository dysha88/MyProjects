var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

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
    if(me.controls.key38){
        me.moveUp();
    }
    //move back
    if(me.controls.key40 == true){
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
    };
    this.setSpeed = function(speed){
        me.speed = speed;
    };
    this.setRotation = function(rot){
        me.rotation = rot;
    };
    this.turnLeft = function(){
        me.rotation = me.rotation - 0.1;
    };
    this.turnRight = function(){
        me.rotation = me.rotation + 0.1;
    };
    this.moveUp = function(){
        me.x = me.x + Math.cos(me.rotation)*me.speed;
        me.y = me.y + Math.sin(me.rotation)*me.speed;
    };
    this.moveDown = function(){
        me.x = me.x - Math.cos(me.rotation)*me.speed;
        me.y = me.y - Math.sin(me.rotation)*me.speed;
    };
    this.setPosition = function (x, y){
        me.x = x;
        me.y = y;
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

var texture = new Texture('images/img2.png');
var drawElements = [];
drawElements.push(texture);
setInterval(function(){
    context.clearRect(0, 0, 600, 600);
    for(var i = 0; i<drawElements.length; i++){
    drawElements[i].update();
    drawElements[i].draw(context);
};
    //texture2.setPosition(250,50);
    
}, 100);

document.addEventListener('keydown', function(event){
    /*console.log(event);
    //move up
    if(event.keyCode == 38){
        texture.moveUp();
    }
    //move back
    if(event.keyCode == 40){
        texture.moveDown();
    }
    //turn left
    if(event.keyCode == 37){
        texture.turnRight();
    }
    //turn right
    if(event.keyCode == 39){
        texture.turnLeft();        
    }*/
    
    texture.setKey(event.keyCode, true);
});
document.addEventListener('keyup', function(event){
    texture.setKey(event.keyCode, false);
});

// шаблон програмирования "наблюдатель"




var events = {
    fire : []
};
//without using addListener function
/*events.fire.push(function(){
    console.log('fire event was fired');
});
events.fire.push(function(){
    console.log('Call fire sound');
});
*/
addListener('fire', function(params){
    console.log('fire event was fired', params);
    
    var bullet = new Bullet(params);
    drawElements.push(bullet);
});
addListener('fire', function(params){
    console.log('Call fire sound', params);
});

function addListener (eventName, functionCallback){
    events[eventName].push(functionCallback);
};
function fireEvent(eventName, params){
    for(var i = 0; i < events[eventName].length; i++){
        events[eventName][i](params);
    };
};
//fireEvent('fire');


