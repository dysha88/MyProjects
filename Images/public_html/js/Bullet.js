// Creating constructor of class Bullet to describe the bullets and there properties
function Bullet(fileName, params) {
    var me = this;
    this.x = params.x;
    this.y = params.y;
    this.width = 10;
    this.height = 30;
    this.radius = Math.sqrt(me.width * me.width + me.height * me.height)/2;
    this.needRemove;
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
            ctx.translate(me.x, me.y);
            ctx.rotate(me.rotation);
            ctx.drawImage(me.image, -me.width / 2, -me.height / 2, me.width, me.height);
            
            ctx.beginPath();
            ctx.arc(0, 0, me.radius, 0, 2*Math.PI);
            ctx.closePath();
            ctx.stroke();
            
            ctx.restore();
        }
        ;
    };
    this.update = function () {
        me.x = me.x + Math.cos(me.rotation) * me.speed;
        me.y = me.y + Math.sin(me.rotation) * me.speed;
        if (me.x > WIDTH || me.y > HEIGHT || me.x < 0 || me.y < 0) {
            me.needRemove = true;
        }
   };
}
;


