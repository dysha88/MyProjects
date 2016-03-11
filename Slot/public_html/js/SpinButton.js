function SpinButton(){
    var me = this;
    this.spinContainer = new PIXI.Container();
    me.spinContainer.position.x = 500;
    me.spinContainer.position.y = 400;

    var spin = new PIXI.Sprite.fromImage('images/sym1.png');
    me.spinContainer.addChild(spin);
    spin.interactive = true;

    this.button = spin;
};
