
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var WIDTH = canvas.width;
var HEIGHT = canvas.height;












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








