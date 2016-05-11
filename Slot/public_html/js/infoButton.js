function InfoButton (){
    var me = this;
    var i, j;
    this.opened = false;

    var rootContainer = new PIXI.Container();
    rootContainer.position.x = 0;
    rootContainer.position.y = 0;

    var backContainer = new PIXI.Container;
    backContainer.position.x = 0;
    backContainer.position.y = 0;

    backContainer.visible = me.opened;

    this.init = function(stage){
        //var back = new PIXI.Graphics();
        //back.beginFill(0x333333, 1);
        //back.drawRect(GAMECONFIG.reelsOffsetX - 15, GAMECONFIG.reelsOffsetY - 15, 930, 500);
        //back.endFill();

        var blackShadow = new PIXI.Sprite.fromImage('images/paytableBG.png');
        blackShadow.position.x = 500;
        blackShadow.position.y = 410;
        blackShadow.scale.x = 1.4;
        blackShadow.scale.y = 1.05;

        var blackShadow1 = new PIXI.Sprite.fromImage('images/paytableBG.png');
        blackShadow1.position.x = 150;
        blackShadow1.position.y = 445;
        blackShadow1.scale.x = 1.1;
        blackShadow1.scale.y = 1.4;

        var paytableScreens = [];
        var paytableBtns = [];

        for(i = 0; i < 5; i++){
            var paytableScreen = new PIXI.Sprite.fromImage('images/paytable'+i+'.png');
            paytableScreen.position.x = GAMECONFIG.reelsOffsetX - 3;
            paytableScreen.position.y = GAMECONFIG.reelsOffsetY - 3;
            paytableScreen.scale.x = 1.36;
            paytableScreen.scale.y = 1.4;
            paytableScreen.visible = false;
            paytableScreens.push(paytableScreen);
            backContainer.addChild(paytableScreen);
        }
        paytableScreens[0].visible = true;

        this.hidePaytableBtn = function() {
            for (j = 0; j < paytableScreens.length; j++) {
                paytableScreens[j].visible = false;
            }
        };

        backContainer.addChild(blackShadow);
        backContainer.addChild(blackShadow1);

        var closeBtn = new RegularButton(1030, GAMECONFIG.reelsOffsetY + 13, 'images/closeBtn.png');
        closeBtn.init(backContainer);
        closeBtn.onMouseUpCallback = function(){
            me.closePaytable();
        };

        //for(i = 0; i < paytableScreens.length; i++){
        //    var paytableBtn = new RegularButton(528 + 30*i, 426, 'images/paytableCircle.png');
        //    paytableBtn.init(backContainer);
        //    paytableBtn.onMouseOverCallback = function(){
        //        paytableBtn.hoverImage.scale.x = 1.6;
        //        paytableBtn.hoverImage.scale.y = 1.6;
        //    };
        //    paytableBtns.push(paytableBtn);
        //}
        //
        //paytableBtns[0].scale(1.45);
        //paytableBtns[1].scale(1.45);
        //paytableBtns[2].scale(1.45);
        //paytableBtns[3].scale(1.45);
        //paytableBtns[4].scale(1.45);
        //
        //paytableBtns[0].onMouseOverCallback = function(){
        //    paytableBtns[1].hoverImage.scale.x = 1.6;
        //    paytableBtns[1].hoverImage.scale.y = 1.6;
        //};
        //
        //paytableBtns[1].onMouseUpCallBack = function(){
        //        paytableScreens[0].visible = true;
        //        paytableScreens[1].visible = false;
        //        paytableScreens[2].visible = false;
        //        paytableScreens[3].visible = false;
        //        paytableScreens[4].visible = false;
        //};

        var paytableBtn1 = new RegularButton(528, 426, 'images/paytableCircle.png');
        paytableBtn1.init(backContainer);
        paytableBtn1.scale(1.45);

        paytableBtn1.onMouseOverCallback = function(){
            paytableBtn1.hoverImage.scale.x = 1.6;
            paytableBtn1.hoverImage.scale.y = 1.6;
        };

        paytableBtn1.onMouseUpCallback = function(){
            paytableScreens[0].visible = true;
            paytableScreens[1].visible = false;
            paytableScreens[2].visible = false;
            paytableScreens[3].visible = false;
            paytableScreens[4].visible = false;
            paytable1Btn1.rootContainer.visible = true;
            paytable2Btn1.rootContainer.visible = false;
            paytable3Btn1.rootContainer.visible = false;
            paytable4Btn1.rootContainer.visible = false;
            paytable5Btn1.rootContainer.visible = false;
        };

        var paytableBtn2 = new RegularButton(558, 426, 'images/paytableCircle.png');
        paytableBtn2.init(backContainer);
        paytableBtn2.scale(1.45);

        paytableBtn2.onMouseOverCallback = function(){
            paytableBtn2.hoverImage.scale.x = 1.6;
            paytableBtn2.hoverImage.scale.y = 1.6;
        };

        paytableBtn2.onMouseUpCallback = function(){
            paytableScreens[0].visible = false;
            paytableScreens[1].visible = true;
            paytableScreens[2].visible = false;
            paytableScreens[3].visible = false;
            paytableScreens[4].visible = false;
            paytable1Btn1.rootContainer.visible = false;
            paytable2Btn1.rootContainer.visible = true;
            paytable3Btn1.rootContainer.visible = false;
            paytable4Btn1.rootContainer.visible = false;
            paytable5Btn1.rootContainer.visible = false;
        };

        var paytableBtn3 = new RegularButton(589, 426, 'images/paytableCircle.png');
        paytableBtn3.init(backContainer);
        paytableBtn3.scale(1.45);

        paytableBtn3.onMouseOverCallback = function(){
            paytableBtn3.hoverImage.scale.x = 1.6;
            paytableBtn3.hoverImage.scale.y = 1.6;
        };

        paytableBtn3.onMouseUpCallback = function(){
            paytableScreens[0].visible = false;
            paytableScreens[1].visible = false;
            paytableScreens[2].visible = true;
            paytableScreens[3].visible = false;
            paytableScreens[4].visible = false;
            paytable1Btn1.rootContainer.visible = false;
            paytable2Btn1.rootContainer.visible = false;
            paytable3Btn1.rootContainer.visible = true;
            paytable4Btn1.rootContainer.visible = false;
            paytable5Btn1.rootContainer.visible = false;
        };

        var paytableBtn4 = new RegularButton(620, 426, 'images/paytableCircle.png');
        paytableBtn4.init(backContainer);
        paytableBtn4.scale(1.45);

        paytableBtn4.onMouseOverCallback = function(){
            paytableBtn4.hoverImage.scale.x = 1.6;
            paytableBtn4.hoverImage.scale.y = 1.6;
        };

        paytableBtn4.onMouseUpCallback = function(){
            paytableScreens[0].visible = false;
            paytableScreens[1].visible = false;
            paytableScreens[2].visible = false;
            paytableScreens[3].visible = true;
            paytableScreens[4].visible = false;
            paytable1Btn1.rootContainer.visible = false;
            paytable2Btn1.rootContainer.visible = false;
            paytable3Btn1.rootContainer.visible = false;
            paytable4Btn1.rootContainer.visible = true;
            paytable5Btn1.rootContainer.visible = false;
        };

        var paytableBtn5 = new RegularButton(651, 426, 'images/paytableCircle.png');
        paytableBtn5.init(backContainer);
        paytableBtn5.scale(1.45);

        paytableBtn5.onMouseOverCallback = function(){
            paytableBtn5.hoverImage.scale.x = 1.6;
            paytableBtn5.hoverImage.scale.y = 1.6;
        };

        paytableBtn5.onMouseUpCallback = function(){
            paytableScreens[0].visible = false;
            paytableScreens[1].visible = false;
            paytableScreens[2].visible = false;
            paytableScreens[3].visible = false;
            paytableScreens[4].visible = true;
            paytable1Btn1.rootContainer.visible = false;
            paytable2Btn1.rootContainer.visible = false;
            paytable3Btn1.rootContainer.visible = false;
            paytable4Btn1.rootContainer.visible = false;
            paytable5Btn1.rootContainer.visible = true;

        };

        var paytable1Btn1 = new RegularButton(527, 426, 'images/paytableCircle1.png');
        paytable1Btn1.init(backContainer);
        paytable1Btn1.scale(1.45);

        paytable1Btn1.onMouseOverCallback = function(){
            paytable1Btn1.hoverImage.scale.x = 1.6;
            paytable1Btn1.hoverImage.scale.y = 1.6;
        };

        var paytable2Btn1 = new RegularButton(558, 426, 'images/paytableCircle1.png');
        paytable2Btn1.init(backContainer);
        paytable2Btn1.scale(1.45);
        paytable2Btn1.rootContainer.visible = false;

        paytable2Btn1.onMouseOverCallback = function(){
            paytable2Btn1.hoverImage.scale.x = 1.6;
            paytable2Btn1.hoverImage.scale.y = 1.6;
        };


        var paytable3Btn1 = new RegularButton(589, 426, 'images/paytableCircle1.png');
        paytable3Btn1.init(backContainer);
        paytable3Btn1.scale(1.45);
        paytable3Btn1.rootContainer.visible = false;

        paytable3Btn1.onMouseOverCallback = function(){
            paytable3Btn1.hoverImage.scale.x = 1.6;
            paytable3Btn1.hoverImage.scale.y = 1.6;
        };

        var paytable4Btn1 = new RegularButton(620, 426, 'images/paytableCircle1.png');
        paytable4Btn1.init(backContainer);
        paytable4Btn1.scale(1.45);
        paytable4Btn1.rootContainer.visible = false;

        paytable4Btn1.onMouseOverCallback = function(){
            paytable4Btn1.hoverImage.scale.x = 1.6;
            paytable4Btn1.hoverImage.scale.y = 1.6;
        };

        var paytable5Btn1 = new RegularButton(651, 426, 'images/paytableCircle1.png');
        paytable5Btn1.init(backContainer);
        paytable5Btn1.scale(1.45);
        paytable5Btn1.rootContainer.visible = false;

        paytable5Btn1.onMouseOverCallback = function(){
            paytable5Btn1.hoverImage.scale.x = 1.6;
            paytable5Btn1.hoverImage.scale.y = 1.6;
        };

        rootContainer.addChild(backContainer);

        this.rootContainer = rootContainer;

        stage.addChild(rootContainer);
    };

    var infoButton = new RegularButton(160, 590, 'images/infoBtn.png');
    infoButton.init(rootContainer);
    infoButton.scale(1.15);

    infoButton.onMouseUpCallback = function(){
        me.opened = !me.opened;
        backContainer.visible = me.opened;
    };

    this.closePaytable = function(){
        me.opened = false;
        backContainer.visible = me.opened;
    };

    addListener('allReelsStopped', me.closePaytable);
    addListener('spinButtonPress', me.closePaytable);
    addListener('maxBetButtonPress', me.closePaytable);
}
