function ReelsArea (reelStrip) {
    var me = this;
    this.x = 20;
    this.y = 20;
    this.rootContainer = new PIXI.Container();
    me.rootContainer.position.x = 20;
    me.rootContainer.position.y = 0;
    me.rootContainer.addChild(me.rootContainer);
    var reelsArea = new PIXI.Sprite.fromImage('images/reelsArea.png');
    reelsArea.position.x = 80;
    reelsArea.position.y = 20;
    me.reelsAreaContainer.addChild(reelsArea);

};
