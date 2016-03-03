function Gate(x, y, width, height){
    var me = this;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.rotation = 0;
    this.speed = 8;
    this.controls = {
        key37: false, //left
        key38: false, //up
        key39: false, //right
        key40: false //back 
    };
    
    this.item = new PIXI.Graphics();
    
    this.item.position.x = this.x;
    this.item.position.y = this.y;
    
    this.item.beginFill(0x000000);
//    this.item.lineStyle(5, 0xFF0000);
    this.item.drawRect(0, 0, me.width, me.height);
    
//    this.draw = function(ctx){
//        ctx.save();
//        ctx.beginPath();
//        ctx.fillStyle = 'black';
//        ctx.fillRect(me.x, me.y, me.width, me.height);
//        ctx.closePath();
//        ctx.restore();
//    };
    this.update = function(){
        if (me.controls.key38) {
            me.moveUp();
        }
        if (me.controls.key40) {
            me.moveDown();
        }
        
//        me.y = me.y + me.speed;
        me.bounceBack();
    };
    this.moveUp = function () {
        me.y = me.y + me.speed;
    };
    this.moveDown = function () {
        me.y = me.y - me.speed;
    };
    this.bounceBack = function () {
        if (me.y + me.height > HEIGHT) {
            me.y = HEIGHT - me.height;
        }
        if (me.y < 0) {
            me.y = 0;
        }
        ;
    };    
    this.setKey = function (keyCode, keyState) {
        me.controls['key' + keyCode] = keyState;
    };    
};


