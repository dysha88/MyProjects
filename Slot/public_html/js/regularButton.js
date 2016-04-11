function RegularButton(x, y, url) {
    var me = this;

    this.enabled = true;
    this.state = 'up';
    this.init = function (stage) {
        var rootContainer = new PIXI.Container();
        rootContainer.position.x = x;
        rootContainer.position.y = y;
        var button1 = new PIXI.Sprite.fromImage(url);
        var button2 = new PIXI.Sprite.fromImage(url);
        var button3 = new PIXI.Sprite.fromImage(url);

        button1.anchor.set(0.5);
        button2.anchor.set(0.5);
        button3.anchor.set(0.5);

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

    this.enable = function () {
        me.enabled = true;
    };

    this.disable = function () {
        me.enabled = false;
    };

    this.onMouseDown = function () {
        if (me.enabled == true) {
            me.onMouseDownCallback();
            me.state = 'down';
            me.downImage.visible = true;
            me.upImage.visible = false;
            me.hoverImage.visible = false;
            me.downImage.alpha = 0.5;
        }

    };
    this.onMouseUp = function () {
        if (me.enabled == true) {
            me.onMouseUpCallback();
            me.state = 'up';
            me.downImage.visible = false;
            me.upImage.visible = true;
            me.hoverImage.visible = false;
        }

    };
    this.onMouseOver = function () {
        if(me.enabled == true) {
            me.state = 'hover';
            me.downImage.visible = false;
            me.upImage.visible = false;
            me.hoverImage.visible = true;
            me.hoverImage.scale.x = 1.2;
            me.hoverImage.scale.y = 1.2;
            me.onMouseOverCallback();
        }
    };
    this.onMouseOut = function () {
        me.onMouseOutCallback();
        me.state = 'up';
        me.downImage.visible = false;
        me.upImage.visible = true;
        me.hoverImage.visible = false;
    };

    this.onMouseDownCallback = function () {

    };
    this.onMouseUpCallback = function () {

    };
    this.onMouseOverCallback = function () {

    };
    this.onMouseOutCallback = function () {

    };


}