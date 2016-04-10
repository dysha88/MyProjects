function RegularButton (x, y, url){
    var me = this;
    this.state = 'up';
    this.init = function(stage) {
        var rootContainer = new PIXI.Container();
        rootContainer.position.x = x;
        rootContainer.position.y = y;
        var button1 = new PIXI.Sprite.fromImage(url);
        var button2 = new PIXI.Sprite.fromImage(url);
        var button3 = new PIXI.Sprite.fromImage(url);

        rootContainer.addChild(button1);
        rootContainer.addChild(button2);
        rootContainer.addChild(button3);

        rootContainer.interactive = true;

        rootContainer.on('mousedown', me.onMouseDown);
        rootContainer.on('mouseup', me.onMouseUp);
        rootContainer.on('mouseover', me.onMouseOver);
        rootContainer.on('mouseout', me.onMouseOut);


        this.rootContainer = rootContainer;
        this.upImage = button1;
        this.downImage = button2;
        this.hoverImage = button3;
        stage.addChild(rootContainer);
    };

    this.onMouseDown = function(){
        me.onMouseDownCallback();
        me.state = 'down';
        me.downImage.visible = true;
        me.upImage.visible = false;
        me.hoverImage.visible = false;
        me.downImage.alpha = 0.5;
    };
    this.onMouseUp = function(){
        me.onMouseUpCallback();
        me.state = 'up';
        me.downImage.visible = false;
        me.upImage.visible = true;
        me.hoverImage.visible = false;

    };
    this.onMouseOver = function(){

        me.state = 'hover';
        me.downImage.visible = false;
        me.upImage.visible = false;
        me.hoverImage.visible = true;
        //me.hoverImage.scale.x += 0.2;
        //me.hoverImage.scale.y += 0.2;
        me.onMouseOverCallback();

    };
    this.onMouseOut = function(){
        me.onMouseOutCallback();
        me.state = 'up';
        me.downImage.visible = false;
        me.upImage.visible = true;
        me.hoverImage.visible = false;
        //me.upImage.scale.x = 0;
        //me.upImage.scale.y = 0;
    };

    this.onMouseDownCallback = function(){

    };
    this.onMouseUpCallback = function(){

    };
    this.onMouseOverCallback = function(){

    };
    this.onMouseOutCallback = function(){

    };


}