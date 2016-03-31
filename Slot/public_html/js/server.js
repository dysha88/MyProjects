function Server () {
    var me = this;

    var responseQueue = [
        {
            reels : [1,2,3,4,5],
            win : 0,
            winType : 'none'
        },
        {
            reels : [2,3,2,1,0],
            win : 0,
            winType : 'none'
        },
        {
            reels : [0,0,0,0,0],
            win : 100,
            winType : 'bigWin'
        }
    ];


    var queueIndex = 0;

    this.request = function(params){
        //var xhr = new XMLHttpRequest();
        //xhr.onload = function(){
        //    console.log(xhr.responseText);
        //    var resp = JSON.parse(xhr.responseText);
        //    console.log(resp);
        //};
        //xhr.open('GET', 'resp.json', true);
        //xhr.send();

        me.response(responseQueue[queueIndex++]);
        console.log(params);
    };
    this.response = function(response){
        console.log(response);
        fireEvent('serverResponse', response);
    };
    addListener('serverRequest', me.request);
}
