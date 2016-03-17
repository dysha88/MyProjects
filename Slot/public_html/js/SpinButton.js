function SpinButton(){
    var me = this;
    this.rootContainer = new PIXI.Container();
    me.rootContainer.position.x = 600;
    me.rootContainer.position.y = 560;

    var spinButton = new PIXI.Sprite.fromImage('images/spin_button.png');
    me.rootContainer.addChild(spinButton);
    spinButton.interactive = true;

    this.button = spinButton;
    this.getRoot = function (){
        return me.rootContainer;
    };
};
