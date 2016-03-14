function Reels (reelStrip){
    var me = this;
    this.rootContainer = new PIXI.Container();
    me.rootContainer.position.x = 30;
    me.rootContainer.position.y = 30;

    for(var i = 0; i < reelStrip.length; i++){
        var symb = new PIXI.Sprite.fromImage("images/" + reelStrip[i] + ".png");
            symb.position.y = i * 156;
        me.rootContainer.addChild(symb);
        //if(symb.position.y > 450) {
        //    symb.renderable = false;
        //}

    }

    this.setPos = function(position){
        //symb.renderable = true;

        me.rootContainer.position.y = 30 - position*156;
        console.log(me.rootContainer.children);

        //if(me.rootContainer.height > 450) {
        //    me.rootContainer[i].renderable = false;
        //}
        //if(me.rootContainer.position.y < 0){
        //    for(i = 0; i < position; i++){
        //        console.log(me.rootContainer);
        //        me.rootContainer[i].renderable = false;
        //    }
        //}

    };

    this.moving = function () {
        for(i = 0; i < me.rootContainer.children.length; i++){
            me.rootContainer.children[i].position.y += 4;
            console.log(me.rootContainer.children[i].position.y);

            //me.rootContainer.children[i].position.y %= me.rootContainer.height;
            if(me.rootContainer.children[i].position.y > 470 - me.rootContainer.children[i].height )
            {
                me.rootContainer.children[i].position.y = me.rootContainer.children[0].position.y - me.rootContainer.children[i].height*(me.rootContainer.children.length - i);
                console.log(me.rootContainer.children[i].position.y);
                //console.log(me.rootContainer.position.y);
            }

            //if((me.rootContainer.children[i].position.y + me.rootContainer.children[i].height) < 30)
            //{
            //    me.rootContainer.children[i].position.y  += me.rootContainer.children[i].height/2 + 30;
            //}


            //me.rootContainer.children[i].position.y += HEIGHT;
        }

        //me.rootContainer.position.y = pos;
        //me.rootContainer.position.y %= me.rootContainer.height*2;
        //if(me.rootContainer.position.y > HEIGHT)
        //{
        //    me.rootContainer.position.y -= me.rootContainer.height*2;
        //}
        //me.rootContainer.position.y += me.rootContainer.height;

        //me.rootContainer.position.y = pos  + me.rootContainer.height;
        //me.rootContainer.position.y %= me.rootContainer.height * 2;
        //if(me.rootContainer.position.y > HEIGHT)
        //{
        //    me.rootContainer.position.y -= me.rootContainer.height * 2;
        //}
        //me.rootContainer.position.y -= me.rootContainer.height;


    };
    //var post = 0;
    //this.moving1 = function(){
    //    post += 5;
    //    me.rootContainer.position.y = post  + me.rootContainer.height;
    //    me.rootContainer.position.y %= me.rootContainer.height * 2;
    //    if(me.rootContainer.position.y > HEIGHT)
    //    {
    //        me.rootContainer.position.y -= me.rootContainer.height * 2;
    //    }
    //};

    this.startSpin = function (){

    };



    
};


