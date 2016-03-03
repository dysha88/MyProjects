var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb}); //создай обьект отрисовщика; виртуальный канвас// 
document.body.appendChild(renderer.view); //надйи тег бади и добавь в него наш канвас, который находится в renderer.view// куда мы помещаем наш обьект канвас

// create the root of the scene graph
var stage = new PIXI.Container(); //создаем новый контейнер(в игре всегда пригодится минимум один контейнер) - 

// create a texture from an image path
var texture = PIXI.Texture.fromImage('images/sun.png'); // текстура - это попросту картинка на сервере//
var texture1 = PIXI.Texture.fromImage('images/cs.png');
// create a new Sprite using the texture
var sun = new PIXI.Sprite(texture); //создаем спрайт на основе нашей текстуры//
var cs = new PIXI.Sprite(texture1);
// center the sprite's anchor point //якорь, с помощью которого фиксируется 
sun.anchor.x = 0.5;
sun.anchor.y = 0.5;

cs.anchor.x = 0.5;
cs.anchor.y = 0.5;

// move the sprite to the center of the screen
sun.position.x = 200;
sun.position.y = 150;

cs.position.x = 600;
cs.position.y = 150;

stage.addChild(sun); // добавляем спрайт в контейнер
stage.addChild(cs);
// start animating
animate();
function animate() {
    requestAnimationFrame(animate); //функция, которая пытается вызывать функцию максимальное количество раз

    // just for fun, let's rotate mr rabbit a little
    sun.rotation += 0.05;
    cs.rotation -= 0.05;
    // render the container
    renderer.render(stage);
}
stage.position.x = 100;
stage.scale.y = 2;



// скейл для дракона
spineDragon.operation.scale = [
    {
        time : 0,
        value : {
            scaleX : 1,
            scaleY : 1
        }
        },
        {
            time : 1000,
            value : {
                saleX : 2,
                scaleY : 2
            }
        },
        {
            time : 1500,
            value : {
                scaleX : 1,
                scaleY : 1
            }
        }
    }
];


