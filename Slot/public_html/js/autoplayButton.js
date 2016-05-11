function AutoplayButton(){
    var me = this;
    var rootContainer = new PIXI.Container;
    rootContainer.position.x = 0;
    rootContainer.position.y = 0;

    var autoplayButton = new RegularButton(485, 590, 'images/autoplayBtn.png');
    autoplayButton.init(rootContainer);
    autoplayButton.onMouseOverCallback = function(){
        autoplayButton.hoverImage.scale.x = 1.05;
        autoplayButton.hoverImage.scale.y = 1.05;
    };

    this.rootContainer = rootContainer;

    this.init = function(stage){
        stage.addChild(rootContainer);
    };







}
