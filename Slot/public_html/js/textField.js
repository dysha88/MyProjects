function TextField(){
    var me = this;
    var rootContainer = new PIXI.Container();
    rootContainer.position.x = 0;
    rootContainer.position.y = 0;

    this.lastResponse = {};
    this.lastSettings = {};

    this.serverResponse = function(response){
        me.lastResponse = response;
    };

    this.getSettings = function(settings){
        me.lastSettings = settings;
    };

    this.init = function(stage){

        fireEvent('settingsRequest');

        var graphics = new PIXI.Graphics();
        //graphics.lineStyle(2, 0x0000FF, 1);
        graphics.beginFill(0x228B22, 1);
        graphics.drawRoundedRect(970, 600, 160, 30, 10);
        graphics.endFill();
        graphics.beginFill(0x228B22, 1);
        graphics.drawRoundedRect(970, 565, 160, 30, 10);
        graphics.endFill();
        graphics.beginFill(0, 1);
        graphics.drawRect(0, HEIGHT - 25, WIDTH, 25);
        graphics.endFill();
        rootContainer.addChild(graphics);

        var bet1Text = new PIXI.Text('BET                       ', GAMECONFIG.textStyle);
        bet1Text.position.x = 980;
        bet1Text.position.y = 572;
        bet1Text.text = 'BET                       ' + me.lastSettings.bet;
        rootContainer.addChild(bet1Text);

        var coinsText = new PIXI.Text('COINS            ', GAMECONFIG.textStyle);
        coinsText.position.x = 980;
        coinsText.position.y = 607;
        coinsText.text = 'COINS              ' + me.lastSettings.cash/me.lastSettings.currentCoinValue;
        rootContainer.addChild(coinsText);

        var levelText = new PIXI.Text('LEVEL', GAMECONFIG.textStyle1);
        levelText.position.x = 860;
        levelText.position.y = 565;
        levelText.text = 'LEVEL \n     ' + me.lastSettings.currentBetLevel;
        rootContainer.addChild(levelText);

        var coinValueText = new PIXI.Text('COIN VALUE', GAMECONFIG.textStyle1);
        coinValueText.position.x = 270;
        coinValueText.position.y = 565;
        coinValueText.text = 'COIN VALUE \n          ' + me.lastSettings.currentCoinValue;
        rootContainer.addChild(coinValueText);

        var cashText = new PIXI.Text('Cash: €', GAMECONFIG.textStyle2);
        cashText.position.x = 470;
        cashText.position.y = HEIGHT - 20;
        cashText.text = 'Cash: €' + 5000.00;
        rootContainer.addChild(cashText);

        var betText = new PIXI.Text('Bet: €', GAMECONFIG.textStyle2);
        betText.position.x = 590;
        betText.position.y = HEIGHT - 20;
        betText.text = 'Bet: €' + me.lastSettings.bet*me.lastSettings.currentBetLevel*me.lastSettings.currentCoinValue;
        rootContainer.addChild(betText);

        var winText = new PIXI.Text('Win: €', GAMECONFIG.textStyle2);
        winText.position.x = 690;
        winText.position.y = HEIGHT - 20;
        winText.text = 'Win: €' + 0.00;
        rootContainer.addChild(winText);

        var bigWin = new PIXI.Text('', GAMECONFIG.textStyle3);
        bigWin.position.x = 450;
        bigWin.position.y = 230;
        rootContainer.addChild(bigWin);

        this.rootContainer = rootContainer;
        this.bet1Text = bet1Text;
        this.betText = betText;
        this.bigWin = bigWin;
        this.winText = winText;
        this.coinsText = coinsText;
        this.levelText = levelText;
        this.coinValueText = coinValueText;
        this.cashText = cashText;
        stage.addChild(rootContainer);
    };

    this.win = 0;
    this.totalWin = 0;

    this.winPresentation = function(){
        //console.log(me.lastResponse.winType);
        me.win = me.lastResponse.win;
        me.totalWin += me.lastResponse.win;
        //winFieldText.text = 'WIN: ' + me.win;
        me.winText.text = 'Win: €' + me.win;
        //totalWinField.text = 'Total win: ' + me.totalWin;
        me.lastSettings.cash += me.lastResponse.win;
        me.cashText.text = 'Cash: €' + me.lastSettings.cash;
        console.log(me.win);

        if(me.lastResponse.winType == 'BigWin'){
            console.log(me.lastResponse.winType);
            me.bigWin.text = '' + me.lastResponse.winType + '\n    ' + me.lastResponse.win;
            //setTimeout(function(){
            //    me.rootContainer.removeChild(bigWin);
            //}, 10000);
            setTimeout(me.clearTexture, 5000);
        }

        if(me.lastResponse.winType == 'MegaWin'){
            console.log(me.lastResponse.winType);
            me.bigWin.text = '' + me.lastResponse.winType + '\n    ' + me.lastResponse.win;
            setTimeout(me.clearTexture, 5000);
        }

        if(me.lastResponse.winType == 'smallWin'){
            console.log(me.lastResponse.winType);
            me.bigWin.text = '' + me.lastResponse.winType + '\n    ' + me.lastResponse.win;
            setTimeout(me.clearTexture, 2000);
        }

        if(me.lastResponse.winType == 'mediumWin'){
            console.log(me.lastResponse.winType);
            me.bigWin.text = '' + me.lastResponse.winType + '\n    ' + me.lastResponse.win;
            setTimeout(me.clearTexture, 3000);
        }

    };

    //var winFieldText = new PIXI.Text('WIN: ', style);
    //winFieldText.position.x = -30;
    //winFieldText.text = 'WIN: ' + 0;
    //me.rootContainer.addChild(winFieldText);

    //var totalWinField = new PIXI.Text('Total win: ', style);
    //totalWinField.position.x = -30;
    //totalWinField.position.y = 50;
    //totalWinField.text = 'Total win: ' + 0;
    //me.rootContainer.addChild(totalWinField);


    this.clearTexture = function(){
        me.bigWin.text = '';
    };

    this.clearWin = function (){
        me.winText.text = 'Win: €' + '0';
    };

    this.changeCash = function(){
        me.lastSettings.cash -= me.lastSettings.bet*me.lastSettings.currentBetLevel*me.lastSettings.currentCoinValue;
        me.cashText.text = 'Cash: €' + me.lastSettings.cash;

    };

    this.clearAll = function(){
        me.clearTexture();
        me.clearWin();
        me.changeCash();
    };

    this.setWin = function(){
        me.win = me.lastResponse.win;
        me.totalWin += me.lastResponse.win;
        winText.text = 'WIN: ' + me.win;
        totalWinField.text = 'Total win: ' + me.totalWin;
        console.log(me.win);
    };

    this.setMaxBetLevel = function(){
        me.levelText.text = 'LEVEL \n     ' + me.lastSettings.maxBetLevel;
        me.betText.text = 'Bet: €' + me.lastSettings.bet*me.lastSettings.maxBetLevel*me.lastSettings.coinValues[3];
        me.bet1Text.text = 'BET                        ' + me.lastSettings.bet*me.lastSettings.maxBetLevel;

    };


    this.increaseBetLevel = function(){
        me.bet1Text.text = 'BET                       ' + me.lastSettings.bet*me.lastSettings.currentBetLevel;
        me.betText.text = 'Bet: €' + me.lastSettings.bet*me.lastSettings.currentBetLevel*me.lastSettings.currentCoinValue;
        me.coinsText.text = 'COINS              ' + me.lastSettings.cash/me.lastSettings.currentCoinValue;
        me.levelText.text = 'LEVEL \n     ' + me.lastSettings.currentBetLevel;
    };

    this.decreaseBetLevel = function(){
        me.bet1Text.text = 'BET                        ' + me.lastSettings.bet*me.lastSettings.currentBetLevel;
        me.betText.text = 'Bet: €' + me.lastSettings.bet*me.lastSettings.currentBetLevel*me.lastSettings.currentCoinValue;
        me.coinsText.text = 'COINS              ' + me.lastSettings.cash/me.lastSettings.currentCoinValue;
        me.levelText.text = 'LEVEL \n     ' + me.lastSettings.currentBetLevel;
    };

    this.increaseCoinValue = function(){
        me.betText.text = 'Bet: €' + me.lastSettings.bet*me.lastSettings.currentBetLevel*me.lastSettings.currentCoinValue;
        me.coinsText.text = 'COINS              ' + me.lastSettings.cash/me.lastSettings.currentCoinValue;
        me.coinValueText.text = 'COIN VALUE \n          ' + me.lastSettings.currentCoinValue;
    };

    this.decreaseCoinValue = function(){
        me.betText.text = 'Bet: €' + me.lastSettings.bet*me.lastSettings.currentBetLevel*me.lastSettings.currentCoinValue;
        me.coinsText.text = 'COINS              ' + me.lastSettings.cash/me.lastSettings.currentCoinValue;
        me.coinValueText.text = 'COIN VALUE \n          ' + me.lastSettings.currentCoinValue;
    };


    //addListener('reel')
    addListener('serverResponse', me.serverResponse);
    //addListener('allReelsStopped', me.setWin);
    addListener('allReelsStopped', me.winPresentation);
    addListener('spinButtonPress', me.clearAll);
    addListener('setMaxBet', me.setMaxBetLevel);
    addListener('increasedBetLevel', me.increaseBetLevel);
    addListener('decreasedBetLevel', me.decreaseBetLevel);
    addListener('increasedCoinValue', me.increaseCoinValue);
    addListener('decreasedCoinValue', me.decreaseCoinValue);
    addListener('settingsResponse', me.getSettings);

}