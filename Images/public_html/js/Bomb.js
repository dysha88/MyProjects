// Creating constructor of class Bomb to describe the bombs and there properties
function Bomb(fileName, params) {
    var me = this;
    this.x = params.x;
    this.y = params.y;
    this.width = 40;
    this.height = 69;
    this.radius = Math.sqrt(me.width * me.width + me.height * me.height);
    this.type = 'bomb';
    this.rotation = params.direction;
    this.speed = 5;
    this.loaded = false;
    this.image = new Image();
    this.image.onload = function () {
        me.loaded = true;
    };
    this.image.src = fileName;
    this.draw = function (ctx) {
        if (me.loaded) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(me.x, me.y);
            ctx.rotate(0);
            ctx.drawImage(me.image, -me.width / 2, -me.height, me.width, me.height);
            ctx.restore();
        }
        ;
    };
    this.update = function () {
        if (me.y < HEIGHT) {
            me.x = me.x - Math.cos(89.55) * me.speed;
            me.y = me.y - Math.sin(180.5) * me.speed;
        }
        ;
        if (me.y == HEIGHT) {
            this.image.src = 'images/boom.png';
            me.width = 50;
            me.height = 50;
        }
        ;
        if (me.y > HEIGHT) {
            me.y = HEIGHT;
        }
        ;
    };
}
;


