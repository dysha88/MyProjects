var WIDTH = 1280;
var HEIGHT = 720;

var renderer = PIXI.autoDetectRenderer(WIDTH, HEIGHT, {transparent : true});
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();
stage.position.x = 0;
stage.position.y = 0;

var back = new PIXI.Sprite.fromImage('images/back.png');
back.width = WIDTH;
back.height = HEIGHT;
stage.addChild(back);
//var back1 = new PIXI.Sprite.fromImage('images/back.png');
//back1.width = WIDTH;
//back1.height = HEIGHT;
//stage.addChild(back1);

var reels = new PIXI.Container();
var area = new PIXI.Sprite.fromImage('images/reelsArea.png');
area.position.x = GAMECONFIG.reelsOffsetX;
area.position.y = GAMECONFIG.reelsOffsetY;
stage.addChild(area);

var reel1 = new Reels(['sym3', 'sym3', 'sym6', 'sym1', 'sym7', 'sym3', 'sym5', 'sym6', 'sym5', 'sym10'], 0);
reels.addChild(reel1.getRoot());

var reel2 = new Reels(['sym1', 'sym3', 'sym6', 'sym0', 'sym7', 'sym3', 'sym5', 'sym6', 'sym5', 'sym7'], 1);
reel2.setDistance();
reels.addChild(reel2.getRoot());


var reel3 = new Reels(['sym1', 'sym3', 'sym6', 'sym0', 'sym7', 'sym3', 'sym5', 'sym6', 'sym5', 'sym9'], 2);
reel3.setDistance();
reels.addChild(reel3.getRoot());

var reel4 = new Reels(['sym1', 'sym3', 'sym6', 'sym0', 'sym7', 'sym3', 'sym5', 'sym6', 'sym5', 'sym4'], 3);
reel4.setDistance();
reels.addChild(reel4.getRoot());

var reel5 = new Reels(['sym1', 'sym3', 'sym6', 'sym0', 'sym7', 'sym3', 'sym5', 'sym6', 'sym5', 'sym6'], 4);
reel5.setDistance();
reels.addChild(reel5.getRoot());

reels.position.x = GAMECONFIG.reelsOffsetX;
reels.position.y = GAMECONFIG.reelsOffsetY;

stage.addChild(reels);

var thing = new PIXI.Graphics();
thing.position.x = GAMECONFIG.reelsOffsetX;
thing.position.y = GAMECONFIG.reelsOffsetY;
//thing.clear();
thing.beginFill();
//thing.drawRect(area.position.x - 10, area.position.y, area.width, area.height - 10);
thing.drawRect(0, 30, 950, 465);
thing.endFill();
stage.addChild(thing);

reels.mask = thing;

var spin = new SpinButton();
spin.button.on('mousedown', function(){

    fireEvent('spinButtonPress');

    //reel1.setPos(parseInt(Math.random()*20) + 1);
    //reel2.setPos(parseInt(Math.random()*10) + 1);
    //reel3.setPos(parseInt(Math.random()*10) + 1);
    //reel4.setPos(parseInt(Math.random()*10) + 1);
    //reel5.setPos(parseInt(Math.random()*10) + 1);


});

stage.addChild(spin.getRoot());
var spinModule = new SpinModule();
var server = new Server();


function animate() {

    reel1.update();
    reel2.update();
    reel3.update();
    reel4.update();
    reel5.update();

    requestAnimationFrame(animate);
    renderer.render(stage);
}

animate();

