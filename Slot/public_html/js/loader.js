function Loader(){
    var me = this;
    var rootContainer = new PIXI.Container;
    rootContainer.position.x = GAMECONFIG.reelsOffsetX;
    rootContainer.position.y = GAMECONFIG.reelsOffsetY;

    this.rootContainer = rootContainer;

    this.lastResponse = [];


    PIXI.loader
        .add('spritesheet', '_assets/mc.json')
        .load(onAssetsLoaded);

    function onAssetsLoaded () {

        // create an array to store the textures
        var explosionTextures = [],
            i;

        for (i = 0; i < 26; i++) {
            var texture = PIXI.Texture.fromFrame('Explosion_Sequence_A ' + (i + 1) + '.png');
            explosionTextures.push(texture);
        }

        for (i = 0; i < 50; i++) {
            // create an explosion MovieClip
            var explosion = new PIXI.extras.MovieClip(explosionTextures);

            explosion.position.x = Math.random() * 850;
            explosion.position.y = Math.random() * 450;
            explosion.anchor.x = 0.5;
            explosion.anchor.y = 0.5;

            explosion.rotation = Math.random() * Math.PI;

            explosion.scale.set(0.75 + Math.random() * 0.5);

            explosion.gotoAndPlay(Math.random() * 27);
            //explosion.play();

            rootContainer.addChild(explosion);
            rootContainer.visible = false;
        }

    }

    this.serverResponse = function(response){
        me.lastResponse = response;
    };

    this.stopAnimation = function(){
        rootContainer.visible = false;
    }

    this.playBWAnimation = function(){
        if(me.lastResponse.winType == 'BigWin' || me.lastResponse.winType == 'MegaWin'){
            rootContainer.visible = true;
            setTimeout(me.stopAnimation, 5000);
        }
    };

    this.init = function(stage){
        stage.addChild(rootContainer);
    };

    addListener('serverResponse', me.serverResponse);
    addListener('allReelsStopped', me.playBWAnimation);
    addListener('spinButtonPress', me.stopAnimation);
}