function MaxBetButton(){
    var me = this;
    var i;
    var rootContainer = new PIXI.Container;
    rootContainer.position.x = 0;
    rootContainer.position.y = 0;

    this.betLevelBars = [];
    this.lastSettings = {};

    this.init = function(stage){

        fireEvent('settingsRequest');

        this.rootContainer = rootContainer;

        stage.addChild(rootContainer);
    };

    var maxBetButton = new RegularButton(737, 590, 'images/maxBetBtn.png');
    maxBetButton.init(rootContainer);
    maxBetButton.onMouseOverCallback = function(){
        maxBetButton.hoverImage.scale.x = 1.05;
        maxBetButton.hoverImage.scale.y = 1.05;
    };

    maxBetButton.onMouseUpCallback = function(){
        for(i = 0; i < me.betLevelBars.length; i++){
            me.betLevelBars[i].visible = true;
        }
        me.lastSettings.currentBetLevel = me.lastSettings.maxBetLevel;
        fireEvent('setMaxBet', me.lastSettings);
        fireEvent('maxBetButtonPress');


    };

    this.getBetLevelBars = function(betLevelBars){
        me.betLevelBars = betLevelBars;
    };

    this.getSettings = function(settings){
        me.lastSettings = settings;
    };

    addListener('betLevelBars', me.getBetLevelBars);
    addListener('settingsResponse', me.getSettings);


}

