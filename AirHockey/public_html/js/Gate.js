function Gate(x, y, width, height){
    var me = this;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.draw = function(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.fillRect(me.x, me.y, me.width, me.height);
        ctx.closePath();
        ctx.restore();
    };
    this.update = function(){
        
    };
};


