
//var canvas = document.getElementById('myCanvas');
//var context = canvas.getContext('2d');
var WIDTH = 900;
var HEIGHT = 500;

var renderer = PIXI.autoDetectRenderer(WIDTH, 500,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

//var texture = PIXI.Texture.fromImage();

var back = new PIXI.Sprite.fromImage('img/back.png');

stage.addChild(back);

//var back = new Background(WIDTH / 2, HEIGHT, WIDTH / 2, 0, 'yellow', 'skyblue', 'lightskyblue', 0, 0, WIDTH, HEIGHT);

var gate1 = new Gate(0, 2 * HEIGHT / 5, 10, HEIGHT / 5);
stage.addChild(gate1.item);

var gate2 = new Gate(WIDTH - 10, 2 * HEIGHT / 5, 10, HEIGHT / 5);
stage.addChild(gate2.item);

var ball = new Ball(gate1.x + 10 + 10, gate1.y + gate1.height / 2, 10);
stage.addChild(ball.item);



//var square = new Square(WIDTH/2, HEIGHT/2,10);
//var plane = new Plane('images/plane.png');
//
//var rule = new Rules(WIDTH - 180, 10, 179, 40);
//rule.addMessage('Thow Bomb: Press Ctrl');
//rule.addMessage('Make piu-piu: Press Space');

var elements = [];
elements.push(gate1);
elements.push(gate2);
elements.push(ball);
//
var x,y;
for (var i = 0; i < 21; i++) {
    for (var j = i; j < 21; j++) {
        x = WIDTH / 2  - i*10;
        y = HEIGHT / 2 + 20*10 - j*10;
        var square = new Square(x, y, 10);
        stage.addChild(square.item);
        elements.push(square);
    }

}
for (var i = 0; i < 21; i++) {
    for (var j = i; j < 21; j++) {
        x = WIDTH / 2  + i*10;
        y = HEIGHT / 2 - 20*10 + j*10;
        var square = new Square(x, y, 10);
        stage.addChild(square.item);
        elements.push(square);
    }

}
for (var i = 0; i < 20; i++) {
    for (var j = i; j < 20; j++) {
        x = WIDTH / 2 + 20*10 - j*10;
        y = HEIGHT / 2 + i*10;
        var square = new Square(x, y, 10);
        stage.addChild(square.item);
        elements.push(square);
    }

}
for (var i = 0; i < 20; i++) {
    for (var j = i; j < 20; j++) {
        x = WIDTH / 2 - 20*10 + j*10;
        y = HEIGHT / 2  - i*10;
        var square = new Square(x, y, 10);
        stage.addChild(square.item);
        elements.push(square);
    }

}

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

document.addEventListener('keydown', function (event) {
    gate1.setKey(event.keyCode, true);
    console.log(event);
});

document.addEventListener('keyup', function (event) {
    gate1.setKey(event.keyCode, false);
    console.log(event);
});

function animate() {
//    context.clearRect(0, 0, 600, 600);
    //collisionCheck();
//выкидывает все ненужные обьекты из двух массивов collision and drawElements    
//    clearGarbage();
//    addNewBots();
    requestAnimationFrame(animate);
    for (var i = 0; i < elements.length; i++) {
        elements[i].update();
    }
    
    renderer.render(stage);
//    window.requestAnimationFrame(move);
}

animate();





