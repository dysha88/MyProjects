// Create constructor of class Background to background for canvas
function Background(xStart, yStart, xEnd, yEnd, color1, color2, color3, xRect, yRect, width, height) {
    var me = this;
    this.grd = 0;
    this.x1 = xStart;
    this.y1 = yStart;
    this.x2 = xEnd;
    this.y2 = yEnd;
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
    this.x = xRect;
    this.y = yRect;
    this.width = width;
    this.height = height;
    this.draw = function (ctx) {
        ctx.save();
        ctx.beginPath();
        me.grd = ctx.createLinearGradient(me.x1, me.y1, me.x2, me.y2);
        me.grd.addColorStop(0, me.color1);
        me.grd.addColorStop(0.5, me.color2);
        me.grd.addColorStop(1, me.color3);

        ctx.fillStyle = me.grd;
        ctx.fill();
        ctx.fillRect(me.x, me.y, me.width, me.height);
        ctx.closePath();
        ctx.restore();
    };
    this.update = function () {

    };
}
;


