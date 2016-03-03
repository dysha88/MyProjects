function Ball(x, y, radius){
    var me = this;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.rotation = 0;
    this.currentSpeed = 3;
    this.item = new PIXI.Graphics();
    me.item.position.x = me.x;
    me.item.position.y = me.y;
    me.item.beginFill(0x008000);
    me.item.drawCircle(0, 0, me.radius, 0, 7);
//    this.draw = function(ctx){
//        ctx.save();
//        ctx.beginPath();
//        ctx.fillStyle = 'green';
//        ctx.arc(me.x, me.y, me.radius,0,7);
//        ctx.fill();
//        ctx.closePath();
//        ctx.restore();
//    };
    this.controls = {
        key37: false, //left
        key38: false, //up
        key39: false, //right
        key40: false, //back 
        key32: false, //FIRE!!! Space
        key17: false, //bomb!!!! Alt
        button1: false
    };
    this.update = function(){
//// move up
//        if (me.controls.key38) {
//            me.moveUp();
//        }
//// move back
//        if (me.controls.key40) {
//            me.moveDown();
//        }
//
//        me.x = me.x + Math.cos(me.rotation) * me.currentSpeed;
//        me.y = me.y + Math.sin(me.rotation) * me.currentSpeed;
//
//        me.bounceBack();

    };
    this.moveUp = function () {
        me.rotation = me.rotation + 0.1;
    };
    this.moveDown = function () {
        me.rotation = me.rotation - 0.1;
    };
    this.bounceBack = function () {
        if (me.x >= WIDTH) {
            me.x = WIDTH;
        }
        if (me.x <= 0) {
            me.x = 0 + 5;
        }
        ;
        if (me.y + me.height / 2 >= HEIGHT) {
            this.image.src = 'images/boom.png';
            me.reloadPage();
            me.width = 150;
            me.height = 150;
            me.y = HEIGHT - me.height / 2;
            me.currentSpeed = 0;
            me.aceleration = 0;
            me.rotation = -1.5;
        }
        if (me.y <= 0) {
            me.y = 0 + 10;
        }
        ;
    };
    this.reloadPage = function (){
        window.location.reload();   
    };
};


