function BetLevelButtons() {
    var me = this;
    var i;
    this.lastSettings = {};
    var rootContainer = new PIXI.Container;
    rootContainer.position.x = 0;
    rootContainer.position.y = 0;

    var betLevelBars = [];

    this.getSettings = function (settings) {
        me.lastSettings = settings;
    };

    this.init = function (stage) {

        fireEvent('settingsRequest');

        var betLevelBar = new PIXI.Graphics;
        betLevelBar.beginFill(0x228B22, 1);
        betLevelBar.drawRoundedRect(863, 615, 50, 7, 3);
        betLevelBar.endFill();
        rootContainer.addChild(betLevelBar);

        var betLevelBar1 = new PIXI.Graphics;
        betLevelBar1.beginFill(0x7acc00, 1);
        betLevelBar1.drawRoundedRect(863, 615, 12.5, 7, 3);
        betLevelBar1.endFill();
        betLevelBars.push(betLevelBar1);
        rootContainer.addChild(betLevelBar1);

        var betLevelBar2 = new PIXI.Graphics;
        betLevelBar2.beginFill(0x7acc00, 1);
        betLevelBar2.drawRoundedRect(863, 615, 25, 7, 3);
        betLevelBar2.endFill();
        betLevelBar2.visible = false;
        betLevelBars.push(betLevelBar2);
        rootContainer.addChild(betLevelBar2);

        var betLevelBar3 = new PIXI.Graphics;
        betLevelBar3.beginFill(0x7acc00, 1);
        betLevelBar3.drawRoundedRect(863, 615, 37.5, 7, 3);
        betLevelBar3.endFill();
        betLevelBar3.visible = false;
        betLevelBars.push(betLevelBar3);
        rootContainer.addChild(betLevelBar3);

        var betLevelBar4 = new PIXI.Graphics;
        betLevelBar4.beginFill(0x7acc00, 1);
        betLevelBar4.drawRoundedRect(863, 615, 50, 7, 3);
        betLevelBar4.endFill();
        betLevelBar4.visible = false;
        betLevelBars.push(betLevelBar4);
        rootContainer.addChild(betLevelBar4);

        fireEvent('betLevelBars', betLevelBars);

        this.rootContainer = rootContainer;


        stage.addChild(rootContainer);


    };

    var increasedButton = new RegularButton(930, 608, 'images/plusBtn.png');
    increasedButton.init(rootContainer);
    increasedButton.scale(1.3);

    //if(me.lastSettings.currentBetLevel == 4){
    //    increasedButton.enabled = false;
    //    increasedButton.rootContainer.alpha = 0.5;
    //}

    increasedButton.onMouseOverCallback = function () {
        increasedButton.hoverImage.scale.x = 1.4;
        increasedButton.hoverImage.scale.y = 1.4;

    };

    increasedButton.onMouseUpCallback = function () {
        if (me.lastSettings.currentBetLevel !== 4) {
            me.lastSettings.currentBetLevel += 1;
            decreasedButton.rootContainer.alpha = 1;
            decreasedButton.enabled = true;
            for (i = 0; i < me.lastSettings.betLevel.length; i++) {
                if (me.lastSettings.currentBetLevel == me.lastSettings.betLevel[i]) {
                    betLevelBars[i].visible = true;
                }
            }
            increasedButton.rootContainer.alpha = 1;
            increasedButton.enable();
            fireEvent('increasedBetLevel');
        }
        if(me.lastSettings.currentBetLevel == 4){
            increasedButton.rootContainer.alpha = 0.5;
            increasedButton.enabled = false;
        }
    };

    var decreasedButton = new RegularButton(845, 610, 'images/minusBtn.png');
    decreasedButton.init(rootContainer);
    decreasedButton.scale(1.3);

    decreasedButton.enabled = false;

    decreasedButton.onMouseOverCallback = function () {
        decreasedButton.hoverImage.scale.x = 1.4;
        decreasedButton.hoverImage.scale.y = 1.4;
    };

    decreasedButton.onMouseUpCallback = function () {
        console.log(me.lastSettings.currentBetLevel);
        if (me.lastSettings.currentBetLevel !== 1) {
            me.lastSettings.currentBetLevel -= 1;
            increasedButton.enabled = true;
            increasedButton.rootContainer.alpha = 1;
            for (i = me.lastSettings.betLevel.length; i > 0; i--) {
                if (me.lastSettings.currentBetLevel + 1 == me.lastSettings.betLevel[i]) {
                    betLevelBars[i].visible = false;
                }
            }
            //decreasedButton.rootContainer.alpha = 1;
            decreasedButton.enable();
            fireEvent('decreasedBetLevel');
        }
        console.log(me.lastSettings.currentBetLevel);
        if(me.lastSettings.currentBetLevel == 1){
            decreasedButton.rootContainer.alpha = 0.5;
            decreasedButton.enabled = false;
        }
    };

    this.setMaxBet = function(settings){
        me.lastSettings = settings;
        decreasedButton.enabled = true;
        decreasedButton.rootContainer.alpha = 1;
        increasedButton.enabled = false;
        increasedButton.rootContainer.alpha = 0.5;
    };

    addListener('settingsResponse', me.getSettings);
    addListener('setMaxBet', me.setMaxBet);
}
