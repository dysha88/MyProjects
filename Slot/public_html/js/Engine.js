var WIDTH = 1160;
var HEIGHT = 650;

var renderer = PIXI.autoDetectRenderer(WIDTH, HEIGHT, {transparent : true});
document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

//PIXI.loader
//    .load(onAssetsLoaded);

var back = new PIXI.Sprite.fromImage('images/back.png');
back.width = WIDTH;
back.height = HEIGHT;
var back1 = new PIXI.Sprite.fromImage('images/back.png');
back1.width = WIDTH;
back1.height = HEIGHT;
stage.addChild(back);
stage.addChild(back1);

var reelsArea = new PIXI.Container();
var area = new PIXI.Sprite.fromImage('images/reelsArea.png');
reelsArea.addChild(area);

var reel1 = new Reels(['sym3', 'sym3', 'sym6', 'sym1'/*, 'sym7', 'sym3', 'sym5', 'sym6', 'sym5'*/]);
//var reel11 = new Reels(['sym3', 'sym3', 'sym6', 'sym1', 'sym7', 'sym3', 'sym5', 'sym6', 'sym5']);
//reelsArea.addChild(reel11.rootContainer);
reelsArea.addChild(reel1.rootContainer);

var reel2 = new Reels(['sym1', 'sym3', 'sym6', 'sym0', 'sym7', 'sym3', 'sym5', 'sym6', 'sym5']);
reel2.rootContainer.position.x = reel1.rootContainer.position.x + 180;
reelsArea.addChild(reel2.rootContainer);


var reel3 = new Reels(['sym1', 'sym3', 'sym6', 'sym0', 'sym7', 'sym3', 'sym5', 'sym6', 'sym5']);
reel3.rootContainer.position.x = reel2.rootContainer.position.x + 180;
reelsArea.addChild(reel3.rootContainer);

var reel4 = new Reels(['sym1', 'sym3', 'sym6', 'sym0', 'sym7', 'sym3', 'sym5', 'sym6', 'sym5']);
reel4.rootContainer.position.x = reel3.rootContainer.position.x + 180;
reelsArea.addChild(reel4.rootContainer);

var reel5 = new Reels(['sym1', 'sym3', 'sym6', 'sym0', 'sym7', 'sym3', 'sym5', 'sym6', 'sym5']);
reel5.rootContainer.position.x = reel4.rootContainer.position.x + 180;
reelsArea.addChild(reel5.rootContainer);

reelsArea.position.x = 100;
stage.addChild(reelsArea);

var spin = new SpinButton();
spin.button.on('mousedown', function(){
    //reel1.moving();
    setTimeout(reel1.setPos(parseInt(Math.random()*10)),5000);
    reel2.setPos(parseInt(Math.random()*10));
    reel3.setPos(parseInt(Math.random()*10));
    reel4.setPos(parseInt(Math.random()*10));
    reel5.setPos(parseInt(Math.random()*10));
    //requestAnimationFrame(animate);

});

//var movie;
//function onAssetsLoaded()
//{
//    // create an array of textures from an image path
//    var frames = [];
//
//    for (var i = 0; i < reel1.rootContainer.length; i++) {
//        // magically works since the spritesheet was loaded with the pixi loader
//        frames.push(reel1.rootContainer[i]);
//    }
//
//
//    // create a MovieClip (brings back memories from the days of Flash, right ?)
//    movie = new PIXI.extras.MovieClip(frames);
//
//    /*
//     * A MovieClip inherits all the properties of a PIXI sprite
//     * so you can change its position, its anchor, mask it, etc
//     */
//    //movie.position.set(300);
//
//    //movie.anchor.set(0.5);
//    movie.animationSpeed = 1.5;
//
//    movie.play();
//
//    stage.addChild(movie);
//
//    //animate();
//}
//console.log(reel2.rootContainer.children[1].position.y);
//console.log(reel2.rootContainer.position.y);
stage.addChild(spin.rootContainer);

var postition = 0;

function animate() {
    //movie.rotation += 0.1;

    reel1.moving();



    //postition += 10;
    //
    //back.position.x = -(postition * 0.6);
    //back.position.x %= WIDTH * 2;
    //if(back.position.x < 0)
    //{
    //    back.position.x += WIDTH * 2;
    //}
    //back.position.x -= WIDTH;
    //
    //back1.position.x = -(postition * 0.6) + WIDTH;
    //back1.position.x %= WIDTH * 2;
    //if(back1.position.x < 0)
    //{
    //    back1.position.x += WIDTH * 2;
    //}
    //back1.position.x -= WIDTH;


    requestAnimationFrame(animate);

    renderer.render(stage);
}

animate();

