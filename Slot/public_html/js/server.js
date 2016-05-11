function Server () {
    var me = this;

    this.gameSettings = {};

    var serverConfig = {
        betLines : [[1,1,1,1,1],
                    [0,0,0,0,0],
                    [2,2,2,2,2],
                    [0,1,2,1,0],
                    [2,1,0,1,2],
                    [0,0,1,0,0],
                    [2,2,1,2,2],
                    [1,2,2,2,1],
                    [1,0,0,0,1],
                    [1,0,1,0,1],
                    [1,2,1,2,1],
                    [0,1,0,1,0],
                    [2,1,2,1,2],
                    [1,1,0,1,1],
                    [1,1,2,1,1],
                    [0,1,1,1,0],
                    [2,1,1,1,2],
                    [0,1,2,2,2],
                    [2,1,0,0,0],
                    [0,2,0,2,0],
                    [2,0,2,0,2],
                    [0,2,2,2,0],
                    [2,0,0,0,2],
                    [0,0,2,0,0],
                    [2,2,0,2,2]]
    };

    //var responseQueue = [
    //    {
    //        reels : [1,2,3,4,5],
    //        win : 150,
    //        winType : 'bigWin',
    //        betLines : [1, 2] // 1,2 - our winning betlines
    //    },
    //    {
    //        reels : [2,3,2,1,0],
    //        win : 50,
    //        winType : 'smallWin',
    //        betLInes : [0, 1]
    //    },
    //    {
    //        reels : [0,0,0,0,0],
    //        win : 100,
    //        winType : 'bigWin',
    //        betLInes : [1, 2]
    //    }
    //];

    //var queueIndex = 0;

    this.getSettings = function(settings){
        me.gameSettings = settings;
    };

    this.request = function(){
        //var xhr = new XMLHttpRequest();
        //xhr.onload = function(){
        //    console.log(xhr.responseText);
        //    var resp = JSON.parse(xhr.responseText);
        //    console.log(resp);
        //};
        //xhr.open('GET', 'resp.json', true);
        //xhr.send();
        //me.generateOutcome();
        me.response(me.generateOutcome());
        //console.log(params);
    };
    this.response = function(response){
        //console.log(response);
        fireEvent('serverResponse', response);
    };


    this.generateOutcome = function(){
        var response = {
            reels : [],
            betLines : [],
            win : 0,
            winType : 'none'
        };

        //var reelStopPos1 = parseInt(Math.random()*GAMECONFIG.reelStrip[0].length);
        //var reelStopPos2 = parseInt(Math.random()*GAMECONFIG.reelStrip[1].length);
        //var reelStopPos3 = parseInt(Math.random()*GAMECONFIG.reelStrip[2].length);
        //var reelStopPos4 = parseInt(Math.random()*GAMECONFIG.reelStrip[3].length);
        //var reelStopPos5 = parseInt(Math.random()*GAMECONFIG.reelStrip[4].length);
        //
        //response.reels.push(reelStopPos1);
        //response.reels.push(reelStopPos2);
        //response.reels.push(reelStopPos3);
        //response.reels.push(reelStopPos4);
        //response.reels.push(reelStopPos5);
        //var winSym1 = GAMECONFIG.reelStrip[0][reelStopPos1];
        //var winSym2 = GAMECONFIG.reelStrip[1][reelStopPos2];
        //var winSym3 = GAMECONFIG.reelStrip[2][reelStopPos3];

        //All comments bellow describes in following 'for'

        var winSym = [];
        var reelStopPos = [];
        var i,j;

        for(i = 0; i < GAMECONFIG.reelStrip.length; i++){
            reelStopPos.push(parseInt(Math.random()*GAMECONFIG.reelStrip[i].length));
            response.reels.push(reelStopPos[i]);
        }
        //console.log(reelStopPos);
        //console.log(GAMECONFIG.reelStrip[0].length);

        for(i = 0; i < GAMECONFIG.reelStrip.length; i++){
            winSym[i] = [];
            for(j = 0; j < GAMECONFIG.row; j++){
                if((reelStopPos[i] + j) < GAMECONFIG.reelStrip[i].length) {
                    winSym[i].push(GAMECONFIG.reelStrip[i][reelStopPos[i] + j]);
                }
                if((reelStopPos[i] + j) >= GAMECONFIG.reelStrip[i].length) {
                    winSym[i].push(GAMECONFIG.reelStrip[i][(reelStopPos[i] + j) - GAMECONFIG.reelStrip[i].length]);
                }
            }
        }


        for(i = 0; i < serverConfig.betLines.length; i++) {
            var sym0 = winSym[0][serverConfig.betLines[i][0]];
            var sym1 = winSym[1][serverConfig.betLines[i][1]];
            var sym2 = winSym[2][serverConfig.betLines[i][2]];
            var sym3 = winSym[3][serverConfig.betLines[i][3]];
            var sym4 = winSym[4][serverConfig.betLines[i][4]];
            if ((sym0 == sym1 && sym0 == sym2) || (sym0 == sym1 && sym0 == sym2 && sym0 == sym3) || (sym0 == sym1 && sym0 == sym2 && sym0 == sym3 && sym0 == sym4)) {
                response.betLines.push(i);
                for(j = 0; j < GAMECONFIG.payOut.length; j++){
                    if(sym0== GAMECONFIG.payOut[j].sym){
                        response.win += GAMECONFIG.payOut[j].x3*me.gameSettings.currentBetLevel;
                    }
                    //if((sym3 == GAMECONFIG.payOut[j].sym) && (sym0 == sym3)){
                    //    response.win += GAMECONFIG.payOut[j].x4*me.gameSettings.currentBetLevel;
                    //}
                    //if((sym2 == GAMECONFIG.payOut[j].sym) && (sym0 == sym2)){
                    //    response.win += GAMECONFIG.payOut[j].x3*me.gameSettings.currentBetLevel;
                    //}
                    //if(sym3 == GAMECONFIG.payOut[j].sym){
                    //    response.win += GAMECONFIG.payOut[j].x4;
                    //}
                    //if(sym4 == GAMECONFIG.payOut[j].sym && sym3 == sym4){
                    //    response.win += GAMECONFIG.payOut[j].x4;
                    //}

                    //console.log(response.win);
                    //console.log(response.betLines);


                }
                //if(winSym[0][serverConfig.betLines[i][0]] == 'SYM10'){
                //    response.win += 10;
                //}
                //if(winSym[0][serverConfig.betLines[i][0]] == 'SYM9'){
                //    response.win += 20;
                //}
                //if(winSym[0][serverConfig.betLines[i][0]] == 'SYM8'){
                //    response.win += 30;
                //}
                //if(winSym[0][serverConfig.betLines[i][0]] == 'SYM7'){
                //    response.win += 40;
                //}
                //if(winSym[0][serverConfig.betLines[i][0]] == 'SYM6'){
                //    response.win += 50;
                //}
                //if(winSym[0][serverConfig.betLines[i][0]] == 'SYM5'){
                //    response.win += 60;
                //}
                //if(winSym[0][serverConfig.betLines[i][0]] == 'SYM4'){
                //    response.win += 70;
                //}
                //if(winSym[0][serverConfig.betLines[i][0]] == 'SYM3'){
                //    response.win += 80;
                //}
                //if(winSym[0][serverConfig.betLines[i][0]] == 'SYM2'){
                //    response.win += 90;
                //}
                //if(winSym[0][serverConfig.betLines[i][0]] == 'SYM1'){
                //    response.win += 100;
                //}

            }
        }



        //if(winSym[0][0] == winSym[1][0] && winSym[0][0] == winSym[2][0]){
        //    response.betLines.push(0);
        //    response.win += 10;
        //}
        //
        //if(winSym[0][1] == winSym[1][1] && winSym[0][1] == winSym[2][1]){
        //    response.betLines.push(1);
        //    response.win += 100;
        //}
        //
        //if(winSym[0][2] == winSym[1][2] && winSym[0][2] == winSym[2][2]){
        //    response.betLines.push(2);
        //    response.win += 50;
        //}
        //
        //if(winSym[0][0] == winSym[1][0] && winSym[0][0] == winSym[2][1]){
        //    response.betLines.push(3);
        //    response.win += 70;
        //}

        if(response.win*me.gameSettings.currentBetLevel <= 10 && response.win*me.gameSettings.currentBetLevel > 0) {
            response.winType = 'smallWin';
        } else
        if(response.win*me.gameSettings.currentBetLevel > 10 && response.win*me.gameSettings.currentBetLevel <= 50) {
            response.winType = 'mediumWin';
        } else
        if(response.win*me.gameSettings.currentBetLevel > 50 && response.win*me.gameSettings.currentBetLevel <= 100){
            response.winType = 'BigWin';
        } else
        if(response.win*me.gameSettings.currentBetLevel > 100 && response.win*me.gameSettings.currentBetLevel <= 350){
            response.winType = 'MegaWin';
        } else {
            response.winType = '';
        }

        return response;



    };

    addListener('serverRequest', me.request);
    addListener('settingsResponse', me.getSettings);
}
