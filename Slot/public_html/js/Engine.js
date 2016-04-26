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
area.position.x = GAMECONFIG.reelsOffsetX - 30;
area.position.y = GAMECONFIG.reelsOffsetY - 30;
stage.addChild(area);

var reel1 = new Reels(GAMECONFIG.reelStrip[0], 0);
reels.addChild(reel1.getRoot());

var reel2 = new Reels(GAMECONFIG.reelStrip[1], 1);
reel2.setDistance();
reels.addChild(reel2.getRoot());

var reel3 = new Reels(GAMECONFIG.reelStrip[2], 2);
reel3.setDistance();
reels.addChild(reel3.getRoot());

var reel4 = new Reels(GAMECONFIG.reelStrip[3], 3);
reel4.setDistance();
reels.addChild(reel4.getRoot());

var reel5 = new Reels(GAMECONFIG.reelStrip[4], 4);
reel5.setDistance();
reels.addChild(reel5.getRoot());

reels.position.x = GAMECONFIG.reelsOffsetX;
reels.position.y = GAMECONFIG.reelsOffsetY;

stage.addChild(reels);

var mask = new Mask();
mask.init(stage, reels);


var spinButton = new SpinButton();
spinButton.init(stage);

var infoButton = new InfoButton();
infoButton.init(stage);

var spinModule = new SpinModule();
var server = new Server();


var winField = new TextField();
stage.addChild(winField.getRoot());

var betLines = new BetLines();
stage.addChild(betLines.getRoot());
//stage.addChild(spin.getRoot());
//spin.button.on('mousedown', function(){
//
//    fireEvent('spinButtonPress');
//    spin.rootContainer.scale.x += 0.2;
//    spin.rootContainer.scale.y += 0.2;
//    spin.rootContainer.transparent;
//    //reel1.setPos(parseInt(Math.random()*20) + 1);
//    //reel2.setPos(parseInt(Math.random()*10) + 1);
//    //reel3.setPos(parseInt(Math.random()*10) + 1);
//    //reel4.setPos(parseInt(Math.random()*10) + 1);
//    //reel5.setPos(parseInt(Math.random()*10) + 1);
//});
//spin.button.on('mouseup', function(){
//    spin.rootContainer.scale.x -= 0.2;
//    spin.rootContainer.scale.y -= 0.2;
//});
//
//spin.button.on('mouseover', function(){
//    spin.rootContainer.scale.x += 0.3;
//    spin.rootContainer.scale.y += 0.3;
//});
//
//spin.button.on('mouseout', function(){
//    spin.rootContainer.scale.x -= 0.3;
//    spin.rootContainer.scale.y -= 0.3;
//});



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

