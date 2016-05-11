function CoinValueButton() {
    var me = this;
    var i;
    var rootContainer = new PIXI.Container;
    rootContainer.position.x = 0;
    rootContainer.position.y = 0;

    this.lastSettings = {};
    var coinValueBars = [];

    this.getSettings = function(settings){
        me.lastSettings = settings;
    };

    this.init = function (stage){

        fireEvent('settingsRequest');

        var coinValueBar = new PIXI.Graphics;
        coinValueBar.beginFill(0x228B22, 1);
        coinValueBar.drawRoundedRect(300, 615, 50, 7, 3);
        coinValueBar.endFill();
        rootContainer.addChild(coinValueBar);

        var coinValueBar1 = new PIXI.Graphics;
        coinValueBar1.beginFill(0x7acc00, 1);
        coinValueBar1.drawRoundedRect(300, 615, 50 / 6, 7, 3);
        coinValueBar1.endFill();
        coinValueBars.push(coinValueBar1);
        rootContainer.addChild(coinValueBar1);

        var coinValueBar2 = new PIXI.Graphics;
        coinValueBar2.beginFill(0x7acc00, 1);
        coinValueBar2.drawRoundedRect(300, 615, 50 / 3, 7, 3);
        coinValueBar2.endFill();
        coinValueBar2.visible = false;
        coinValueBars.push(coinValueBar2);
        rootContainer.addChild(coinValueBar2);

        var coinValueBar3 = new PIXI.Graphics;
        coinValueBar3.beginFill(0x7acc00, 1);
        coinValueBar3.drawRoundedRect(300, 615, 50 / 2, 7, 3);
        coinValueBar3.endFill();
        coinValueBar3.visible = false;
        coinValueBars.push(coinValueBar3);
        rootContainer.addChild(coinValueBar3);

        var coinValueBar4 = new PIXI.Graphics;
        coinValueBar4.beginFill(0x7acc00, 1);
        coinValueBar4.drawRoundedRect(300, 615, 100 / 3, 7, 3);
        coinValueBar4.endFill();
        coinValueBar4.visible = false;
        coinValueBars.push(coinValueBar4);
        rootContainer.addChild(coinValueBar4);

        var coinValueBar5 = new PIXI.Graphics;
        coinValueBar5.beginFill(0x7acc00, 1);
        coinValueBar5.drawRoundedRect(300, 615, 250 / 6, 7, 3);
        coinValueBar5.endFill();
        coinValueBar5.visible = false;
        coinValueBars.push(coinValueBar5);
        rootContainer.addChild(coinValueBar5);

        var coinValueBar6 = new PIXI.Graphics;
        coinValueBar6.beginFill(0x7acc00, 1);
        coinValueBar6.drawRoundedRect(300, 615, 50, 7, 3);
        coinValueBar6.endFill();
        coinValueBar6.visible = false;
        coinValueBars.push(coinValueBar6);
        rootContainer.addChild(coinValueBar6);

        this.rootContainer = rootContainer;

        stage.addChild(rootContainer);

    };

    var decreasedButton = new RegularButton(282, 610, 'images/minusBtn.png');
    decreasedButton.init(rootContainer);
    decreasedButton.scale(1.3);

    decreasedButton.enabled = false;

    decreasedButton.onMouseOverCallback = function () {
        decreasedButton.hoverImage.scale.x = 1.4;
        decreasedButton.hoverImage.scale.y = 1.4;
    };

    decreasedButton.onMouseUpCallback = function () {

        if (me.lastSettings.currentCoinValue == me.lastSettings.coinValues[1]) {
            me.lastSettings.currentCoinValue = me.lastSettings.coinValues[0];
            increasedButton.rootContainer.alpha = 1;
            increasedButton.enabled = true;
            coinValueBars[1].visible = false;
            decreasedButton.disable();
            decreasedButton.rootContainer.alpha = 0.5;
            fireEvent('increasedCoinValue');
        }

        if (me.lastSettings.currentCoinValue == me.lastSettings.coinValues[2]) {
            me.lastSettings.currentCoinValue = me.lastSettings.coinValues[1];
            decreasedButton.rootContainer.alpha = 1;
            decreasedButton.enabled = true;
            coinValueBars[2].visible = false;
            increasedButton.rootContainer.alpha = 1;
            increasedButton.enable();
            fireEvent('increasedCoinValue');
        }

        if (me.lastSettings.currentCoinValue == me.lastSettings.coinValues[3]) {
            me.lastSettings.currentCoinValue = me.lastSettings.coinValues[2];
            decreasedButton.rootContainer.alpha = 1;
            decreasedButton.enabled = true;
            coinValueBars[3].visible = false;
            increasedButton.rootContainer.alpha = 1;
            increasedButton.enable();
            fireEvent('increasedCoinValue');
        }

        if (me.lastSettings.currentCoinValue == me.lastSettings.coinValues[4]) {
            me.lastSettings.currentCoinValue = me.lastSettings.coinValues[3];
            decreasedButton.rootContainer.alpha = 1;
            decreasedButton.enabled = true;
            coinValueBars[4].visible = false;
            increasedButton.rootContainer.alpha = 1;
            increasedButton.enable();
            fireEvent('increasedCoinValue');
        }

        if (me.lastSettings.currentCoinValue == me.lastSettings.coinValues[5]) {
            me.lastSettings.currentCoinValue = me.lastSettings.coinValues[4];
            decreasedButton.rootContainer.alpha = 1;
            decreasedButton.enabled = true;
            coinValueBars[5].visible = false;
            increasedButton.rootContainer.alpha = 1;
            increasedButton.enable();
            fireEvent('increasedCoinValue');
        }

        //console.log(me.lastSettings.currentBetLevel);
        //if (me.lastSettings.currentCoinValue !== me.lastSettings.coinValues[0]) {
        //    me.lastSettings.currentCoinValue -= 0.01;
        //    increasedButton.enabled = true;
        //    increasedButton.rootContainer.alpha = 1;
        //    for (i = me.lastSettings.coinValues.length; i > 0; i--) {
        //        if (me.lastSettings.currentBetLevel + 1 == me.lastSettings.betLevel[i]) {
        //            betLevelBars[i].visible = false;
        //        }
        //    }
        //    //decreasedButton.rootContainer.alpha = 1;
        //    decreasedButton.enable();
        //    fireEvent('decreasedCoinValue');
        //}
        //if(me.lastSettings.currentCoinValue == 1){
        //    decreasedButton.rootContainer.alpha = 0.5;
        //    decreasedButton.enabled = false;
        //}
    };


    var increasedButton = new RegularButton(367, 608, 'images/plusBtn.png');
    increasedButton.init(rootContainer);
    increasedButton.scale(1.3);

    //console.log(me.lastSettings.coinValues);
    //
    //if(me.lastSettings.currentCoinValue == me.lastSettings.coinValues[5]){
    //    increasedButton.enabled = false;
    //    increasedButton.rootContainer.alpha = 0.5;
    //}

    increasedButton.onMouseOverCallback = function () {
        increasedButton.hoverImage.scale.x = 1.4;
        increasedButton.hoverImage.scale.y = 1.4;
    };

    increasedButton.onMouseUpCallback = function () {



        if (me.lastSettings.currentCoinValue == me.lastSettings.coinValues[4]) {
            me.lastSettings.currentCoinValue = me.lastSettings.coinValues[5];
            decreasedButton.rootContainer.alpha = 1;
            decreasedButton.enabled = true;
            coinValueBars[5].visible = true;

            //increasedButton.rootContainer.alpha = 1;
            increasedButton.disable();
            increasedButton.rootContainer.alpha = 0.5;
            fireEvent('increasedCoinValue');
        }

        if (me.lastSettings.currentCoinValue == me.lastSettings.coinValues[3]) {
            me.lastSettings.currentCoinValue = me.lastSettings.coinValues[4];
            decreasedButton.rootContainer.alpha = 1;
            decreasedButton.enabled = true;
            coinValueBars[4].visible = true;

            increasedButton.rootContainer.alpha = 1;
            increasedButton.enable();
            fireEvent('increasedCoinValue');
        }

        if (me.lastSettings.currentCoinValue == me.lastSettings.coinValues[2]) {
            me.lastSettings.currentCoinValue = me.lastSettings.coinValues[3];
            decreasedButton.rootContainer.alpha = 1;
            decreasedButton.enabled = true;
            coinValueBars[3].visible = true;

            increasedButton.rootContainer.alpha = 1;
            increasedButton.enable();
            fireEvent('increasedCoinValue');
        }

        if (me.lastSettings.currentCoinValue == me.lastSettings.coinValues[1]) {
            me.lastSettings.currentCoinValue = me.lastSettings.coinValues[2];
            decreasedButton.rootContainer.alpha = 1;
            decreasedButton.enabled = true;
            coinValueBars[2].visible = true;

            increasedButton.rootContainer.alpha = 1;
            increasedButton.enable();
            fireEvent('increasedCoinValue');
        }

        if (me.lastSettings.currentCoinValue == me.lastSettings.coinValues[0]) {
            me.lastSettings.currentCoinValue = me.lastSettings.coinValues[1];
            decreasedButton.rootContainer.alpha = 1;
            decreasedButton.enabled = true;
            coinValueBars[1].visible = true;

            increasedButton.rootContainer.alpha = 1;
            increasedButton.enable();
            fireEvent('increasedCoinValue');
        }

        //for(i = 0; i < me.lastSettings.coinValues.length; i++) {
        //    if (me.lastSettings.currentCoinValue == me.lastSettings.coinValues[i]) {
        //        me.lastSettings.currentCoinValue = me.lastSettings.coinValues[i+1];
        //        decreasedButton.rootContainer.alpha = 1;
        //        decreasedButton.enabled = true;
        //        coinValueBars[i].visible = true;
        //
        //        //for (j = 0; j < me.lastSettings.coinValues.length; j++) {
        //        //    if (me.lastSettings.currentCoinValue == me.lastSettings.coinValues[i]) {
        //        //        coinValueBars[i].visible = true;
        //        //    }
        //        //}
        //
        //        increasedButton.rootContainer.alpha = 1;
        //        increasedButton.enable();
        //        fireEvent('increasedCoinValue');
        //    }
        //    if (me.lastSettings.currentCoinValue == me.lastSettings.coinValues[me.lastSettings.coinValues.length]) {
        //        increasedButton.rootContainer.alpha = 0.5;
        //        increasedButton.enabled = false;
        //    }
        //}
    };

    addListener('settingsResponse', me.getSettings);

}
