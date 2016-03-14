function SpinButton(){
    var me = this;
    this.rootContainer = new PIXI.Container();
    me.rootContainer.position.x = 540;
    me.rootContainer.position.y = 525;

    var spinButton = new PIXI.Sprite.fromImage('images/spin_button.png');
    me.rootContainer.addChild(spinButton);
    spinButton.interactive = true;

    this.button = spinButton;
};
