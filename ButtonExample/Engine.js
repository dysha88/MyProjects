var WIDTH = 1280;
var HEIGHT = 720;

var renderer = PIXI.autoDetectRenderer(WIDTH, HEIGHT, {transparent : true});
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();
var spin = new RegularButton(200, 300, 'images/down.png');
spin.init(stage);
spin.onMouseDownCallback = function(){
    console.log('robe');
};
spin.onMouseUpCallback = function(){
    console.log('ebor');
};

var but = new RegularButton(400, 300,'images/up.png');
but.init(stage);
but.onMouseDownCallback = function(){
    console.log('nerobe');
};
but.onMouseUpCallback = function(){
    console.log('eboren');
};

var butn = new RegularButton(400, 100,'images/hove.png');
butn.init(stage);
butn.onMouseDownCallback = function(){
    console.log('mogenerobe');
};
butn.onMouseUpCallback = function(){
    console.log('eborenegom');
};

function animate() {

    requestAnimationFrame(animate);
    renderer.render(stage);
}

animate();