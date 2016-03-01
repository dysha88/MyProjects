function Bot(x, y, shootForDeath) {
    var me = this;
    this.grd = 0;
    this.fillStyle = 'transparent';
    this.arrOfStyle = ['transparent', 'rgba(255,0,0,0.4)', 'rgba(255,0,0,0.7)' ];
    this.type = 'bot';
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 70;
    this.radius = Math.sqrt(me.width * me.width + me.height * me.height)/2;
    this.rotation = Math.random()*360*Math.PI/180;
    this.shootNum = shootForDeath;
    this.needRemove;
    this.numberOfHits = 0;

    this.currentSpeed = 0.5;

//    this.arrColor = ['green', 'blue', 'red', 'black', 'yellow'];
    this.arrBots = ['images/cs.png', 'images/dragon.png', 'images/cat.png', 'images/footbocat.png'];
    this.bot = me.arrBots[parseInt(Math.random() * 4)];
//    this.color = me.arrColor[parseInt(Math.random() * 6)];
//    this.width = 3;
    this.loaded = false;
    this.image = new Image();
    this.image.onload = function () {
        me.loaded = true;
    };
    this.image.src = me.bot;
    this.draw = function (ctx) {
        if (me.loaded) {
            ctx.save();
            ctx.translate(me.x, me.y);

//            ctx.rotate(me.rotation);
            ctx.drawImage(me.image, -me.width / 2, -me.height / 2, me.width, me.height);
            
            ctx.beginPath();
            ctx.arc(0, 0, me.radius, 0, 2 * Math.PI);
            ctx.fillStyle = me.arrOfStyle[me.numberOfHits];
            ctx.closePath();
            ctx.fill();

            ctx.restore();
        }

    };

    //var time = 0;
    this.update = function () {
        if (me.x > WIDTH) {
            me.needRemove = true;
        }
        
        if (me.y > HEIGHT) {
            me.needRemove = true;
        }
        
        if (me.x < 0) {
            me.needRemove = true;
        }
        
        if (me.y < 0) {
            me.needRemove = true;
        }

        me.x = me.x + Math.cos(me.rotation) * me.currentSpeed;
        me.y = me.y + Math.sin(me.rotation) * me.currentSpeed;
    };

//    this.setColor = function (color) {
//        me.color = color;
//    };
    this.deathTime = function () {
        me.numberOfHits++;
        for(i = 0; i < me.shootNum-1; i++){
            me.fillStyle = me.arrOfStyle[i];
        };
        if (me.numberOfHits == me.shootNum) {
            me.needRemove = true;
        }
        ;
    };
}
;



/*function Circle(x, y, r){
 var me = this;
 this.x = x;
 this.y = y;
 this.r = r;
 this.width = 0;
 this.heigth = 0;
 this.arrColor = ['green', 'blue', 'red', 'black', 'yellow'];
 this.color = me.arrColor[parseInt(Math.random()*6)];
 this.draw = function(ctx){
 ctx.save();
 ctx.beginPath();
 ctx.arc(me.x, me.y, me.r, 0, 2*Math.PI);
 ctx.closePath();
 ctx.fillStyle = me.color;
 ctx.fill();
 ctx.restore();
 };
 this.setPosition = function(x1, y1){
 me.x = x1;
 me.y = y1;
 };
 this.speedX = parseInt(Math.random()*10) + 1;
 this.speedY = parseInt(Math.random()*10) + 1;
 this.setArea = function (width, height){
 me.width = width;
 me.height = height;
 };
 var time = 0;
 this.update = function(ctx){
 
 if((me.x + me.speedX > me.width) || (me.x + me.speedX< 0)){
 me.speedX = -me.speedX;
 me.setPosition(me.x + me.speedX, me.y + me.speedY);
 me.draw(ctx);
 
 };
 if((me.y + me.speedY > me.height) || (me.y + me.speedY < 0)){
 me.speedY = -me.speedY;
 me.setPosition(me.x + me.speedX, me.y + me.speedY);
 me.draw(ctx);
 
 };
 me.setPosition(me.x + me.speedX, me.y + me.speedY);
 me.draw(ctx);
 };
 this.redraw = function(){
 time++;
 console.log(time);
 me.update(context);
 };
 };
 
 
 */