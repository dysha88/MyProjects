function Circle(x, y, r) {
    var me = this;

    this.type = 'bot';
    this.x = x;
    this.y = y;
    this.radius = r;
    this.color = 'green';
    this.width = 3;
    this.draw = function (ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(me.x, me.y, me.radius, 0, 2 * Math.PI);
        ctx.fillStyle = me.color;
        ctx.lineWidth = me.width;
        ctx.fill();
        ctx.restore();
    };
    this.update = function () {

    };
    this.setColor = function (color) {
        me.color = color;
        
    };
}
;


