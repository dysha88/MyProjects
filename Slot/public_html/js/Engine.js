var WIDTH = 900;
var HEIGHT = 500;

var renderer = PIXI.autoDetectRenderer(WIDTH, HEIGHT, {backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

var reel1 = new Reels(['sym1', 'sym3', 'sym6', 'sym0', 'sym7', 'sym3', 'sym5', 'sym6', 'sym5']);
stage.addChild(reel1.rootContainer);

var reel2 = new Reels(['sym1', 'sym3', 'sym6', 'sym0', 'sym7', 'sym3', 'sym5', 'sym6', 'sym5']);
reel2.rootContainer.position.x = reel2.rootContainer.position.x + 150;
stage.addChild(reel2.rootContainer);

var spin = new SpinButton();
spin.button.on('mousedown', function(){
    reel1.setPos(2);
    reel2.setPos(4);
});

stage.addChild(spin.spinContainer);

function animate() {

    requestAnimationFrame(animate);
    //for (var i = 0; i < elements.length; i++) {
    //    elements[i].update();
    //}

    renderer.render(stage);
}

animate();

reel1.setPos(3);