function Rules(x, y, width, height) {
    var me = this;
    this.messages = [];
    this.addMessage = function (message) {
        me.messages.push(message);
    };
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = 'red';
    this.lineWidth = 3;
    this.lineHeight = 20;


    this.draw = function (ctx) {
        var tempObj,
                maxTextWidth = 0;

        ctx.save();

        ctx.font = '11pt Calibri';
        ctx.fillStyle = 'black';
        for (i = 0; i < me.messages.length; i++) {
            ctx.fillText(me.messages[i], me.x + 10, me.y + 15 + i * 20);

            tempObj = ctx.measureText(me.messages[i]);

            if (tempObj.width > maxTextWidth) {
                maxTextWidth = tempObj.width;
            }
        }
        ;

        ctx.beginPath();
        ctx.rect(me.x, me.y, maxTextWidth + 20, me.lineHeight * me.messages.length);
        ctx.strokeStyle = me.color;
        ctx.lineWidth = me.lineWidth;
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    };
    this.update = function () {

    };
}
;


