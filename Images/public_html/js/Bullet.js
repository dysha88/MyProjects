// Creating constructor of class Bullet to describe the bullets and there properties
function Bullet(fileName, params) {
    var me = this;
    this.x = params.x;
    this.y = params.y;
    this.width = 10;
    this.height = 30;
    this.radius = Math.sqrt(1000);
    this.type = 'bullet';
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
            ctx.rotate(me.rotation);
            ctx.drawImage(me.image, me.width, me.height, me.width, me.height);
            ctx.restore();
        }
        ;
    };
    this.update = function () {
        me.x = me.x + Math.cos(me.rotation) * me.speed;
        me.y = me.y + Math.sin(me.rotation) * me.speed;
    };
}
;


