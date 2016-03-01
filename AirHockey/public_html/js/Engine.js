
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var WIDTH = canvas.width;
var HEIGHT = canvas.height;

var back = new Background(WIDTH / 2, HEIGHT, WIDTH / 2, 0, 'yellow', 'skyblue', 'lightskyblue', 0, 0, WIDTH, HEIGHT);

var gate1 = new Gate(0, 2*HEIGHT/5, 10, HEIGHT/5);
var gate2 = new Gate(WIDTH - 10, 2*HEIGHT/5, 10, HEIGHT/5);

var ball = new Ball(gate1.x + 10 + 10, gate1.y + gate1.height/2, 10);

//var plane = new Plane('images/plane.png');
//
//var rule = new Rules(WIDTH - 180, 10, 179, 40);
//rule.addMessage('Thow Bomb: Press Ctrl');
//rule.addMessage('Make piu-piu: Press Space');

var drawElements = [];
drawElements.push(back);
drawElements.push(gate1);
drawElements.push(gate2);
drawElements.push(ball);
//drawElements.push(plane);
//drawElements.push(rule);

//var collisionDetection = [];
//collisionDetection.push(plane);

//for (i = 0; i < 5; i++) {
//    var x = Math.random() * 800 + 100,
//            y = Math.random() * 300 + 100,
//            bot = new Bot(x, y, 3);
//    drawElements.push(bot);
//    collisionDetection.push(bot);
//
//    console.log(x, y);
//}
//
//function collisionCheck() {
//    var obj1, obj2, dist;
//    for (var i = 0; i < collisionDetection.length; i++) {
//        obj1 = collisionDetection[i];
//        for (var j = 0; j < collisionDetection.length; j++) {
//            obj2 = collisionDetection[j];
//            if (i != j) {
//                dist = Math.sqrt(Math.pow(obj1.x - obj2.x, 2) +
//                        Math.pow(obj1.y - obj2.y, 2));
//                //  Collision between two objects
//                if (dist < obj1.radius + obj2.radius) {
//                    if ((obj1.type == 'plane') && (obj2.type == 'bot')) {
//
//                        obj1.image.src = 'images/boom.png';
//                        obj1.reloadPage();
//                        obj2.needRemove = true;
//                        //clearGarbage();
//                    }
//                    if ((obj1.type == 'bomb') && (obj2.type == 'bot')) {
//                        obj1.needRemove = true;
//                        obj2.needRemove = true;
//                        //clearGarbage();
//                    }
//                    if ((obj1.type == 'bullet') && (obj2.type == 'bot')) {
//                        obj1.needRemove = true;
//                        obj2.deathTime();
//                    }
//
//                }
//                ;
//
//            }
//            ;
//        }
//        ;
//    }
//    ;
//}
//;
//
//
//function clearGarbage() {
//    for (i = 0; i < drawElements.length; i++) {
//        if (drawElements[i].needRemove) {
//            drawElements.splice(i, 1);
//        }
//
//    }
//
//    for (i = 0; i < collisionDetection.length; i++) {
//        if (collisionDetection[i].needRemove) {
//            collisionDetection.splice(i, 1);
//        }
//
//    }
//    addNewBots();
//
//}
//;
//function addNewBots() {
//    var num = 0;
//    for (i = 0; i < collisionDetection.length; i++) {
//
//        if (collisionDetection[i].type == 'bot') {
//            var n = num++;
//        }
//    }
//    if (n == 0) {
//        for (i = 0; i < 3; i++) {
//            var x = Math.random() * 900 + 100,
//                    y = Math.random() * 400 + 350,
//                    bot = new Bot(x, y, 3);
//            drawElements.push(bot);
//            collisionDetection.push(bot);
//
//        }
//    }
//}
//;



function move() {
    context.clearRect(0, 0, 600, 600);
//    collisionCheck();
//выкидывает все ненужные обьекты из двух массивов collision and drawElements    
//    clearGarbage();
//    addNewBots();

    for (var i = 0; i < drawElements.length; i++) {
        drawElements[i].update();
        drawElements[i].draw(context);
    }
    window.requestAnimationFrame(move);
}
;
move();

//document.addEventListener('keydown', function (event) {
//    plane.setKey(event.keyCode, true);
////    console.log(event);
//});
//
//document.addEventListener('keyup', function (event) {
//    plane.setKey(event.keyCode, false);
////    console.log(event);
//});
//
//document.addEventListener('mousedown', function (event) {
//    event.preventDefault();
//    plane.setButton(event.button, false);
//    plane.moveTo(event.x, event.y);
////   console.log(event);
//});
//
//var events = {
//    fire: [],
//    drop: []
//};
//
//function addListener(eventName, functionCallback) {
//    events[eventName].push(functionCallback);
//}
//;
//
//function fireEvent(eventName, params) {
//    for (var i = 0; i < events[eventName].length; i++) {
//        events[eventName][i](params);
//    }
//    ;
//}
//;
//
//addListener('fire', function (params) {
//    console.log('fire event was fired', params);
//
//    var bullet = new Bullet('images/bullet.png', params);
//    drawElements.push(bullet);
//    collisionDetection.push(bullet);
//});
//
//addListener('drop', function (params) {
//    console.log('Bomb was dropped', params);
//
//    var bomb = new Bomb('images/bomb.png', params);
//    drawElements.push(bomb);
//    collisionDetection.push(bomb);
//}
//);









