function Ball(x, y, radius){
    var me = this;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.draw = function(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'green';
        ctx.arc(me.x, me.y, me.radius,0,7);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    };
    this.update = function(){
        
    };
};


