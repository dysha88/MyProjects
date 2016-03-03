function Square(x, y, lengthOfSide){
    var me = this;
    this.x = x;
    this.y = y;
    this.lengthOfSide = lengthOfSide;
    this.item = new PIXI.Graphics();
    me.item.beginFill(0xFF0000);
    me.item.lineStyle(1, 0x000000);
    me.item.position.x = me.x;
    me.item.position.y = me.y;
    me.item.drawRect(0, 0, me.lengthOfSide, me.lengthOfSide);
//    this.draw = function (ctx){
//        ctx.save();
//        ctx.beginPath();
//        ctx.fillStyle = 'red';
//        ctx.rect(me.x, me.y, me.lengthOfSide, me.lengthOfSide);
//        ctx.fill();
//        ctx.stroke();
//        ctx.closePath();
//        ctx.restore();
//    };
    this.update = function (){
        
    };
};