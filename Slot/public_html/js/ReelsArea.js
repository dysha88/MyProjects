function ReelsArea (reelStrip) {
    var me = this;
    this.rootContainer = new PIXI.Container();
    me.rootContainer.position.x = 0;
    me.rootContainer.position.y = 0;
    me.rootContainer.addChild(me.rootContainer);
    var reelsArea = new PIXI.Sprite.fromImage('images/reelsArea.png');
    reelsArea.position.x = 0;
    reelsArea.position.y = 0;
    me.reelsAreaContainer.addChild(reelsArea);

};
