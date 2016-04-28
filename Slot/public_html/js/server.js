function Server () {
    var me = this;

    var serverConfig = {
        betLines : [[1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [2, 2, 2, 2, 2]]
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

    this.request = function(params){
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

        for(i = 0; i < GAMECONFIG.reelStrip.length; i++){
            winSym[i] = [];
            for(j = 0; j < GAMECONFIG.row; j++){
                if(reelStopPos[i] + j <= GAMECONFIG.reelStrip.length) {
                    winSym[i].push(GAMECONFIG.reelStrip[i][reelStopPos[i] + j]);
                } else {
                    winSym[i].push(GAMECONFIG.reelStrip[i][GAMECONFIG.reelStrip.length - (reelStopPos[i] + j)]);
                }
            }
        }
        console.log(winSym);

        if(winSym[0][0] == winSym[1][0] && winSym[0][0] == winSym[2][0]){
            response.betLines.push(0);
            response.win += 10;
        }

        if(response.win > 10) {
            response.winType = 'smallWin';
        } else {
            response.winType = '';
        }

        return response;



    };
    addListener('serverRequest', me.request);
}
