function Slot(reelsNum, symNum){
    var me = this;
    var betline = new Betline(1);
    betline.slot = this;
    
    this.curOutcome = ['sym7','sym7','sym7'];
    
    this.startSpin = function(){
        
        for(var i = 0; i<reelsNum; i++) {
            
            for(var j = 0; j<symNum; j++) {
                this.reels[i].symbols[j].setSymbolName( getRandomSymbol() );
            }
            
        }
    };
    
    this.stopSpin = function(){
      betline.checkOutcome();  
    };
    
    this.reels = [];
    for(var i = 0; i<reelsNum; i++) {
        this.reels.push(new Reels(symNum));
    }
}

function Reels(symNum) {
    this.symbols = [];
    for(var i = 0; i<symNum; i++) {
        this.symbols.push(new Symbol());
    }
}

function Symbol() {
    this.symbolName = '';
    this.payout = 5;
    this.getSymbolName = function() {
       
    };
    
    this.setSymbolName = function(symbolName) {
       this.symbolName = symbolName;
    };
    
}

function Betline(num){
    this.checkOutcome = function(){
        console.log(this.slot.curOutcome);
        
    };
    
    this.line1 = [1,1,1,1,1];
    this.line2 = [0,0,0,0,0];
    this.line3 = [2,2,2,2,2];
    this.line4 = [0,1,2,1,0];
    this.line5 = [2,1,0,1,2];
    this.line6 = [0,0,1,0,0];
    
}

var getRandomSymbol = function() {
    var num = [0,1,2,3,4,5,6,7,8,9,10,11,12];
    rand = num[Math.floor(Math.random() * num.length)];
    return rand;
};


var slot = new Slot(3,2);

slot.startSpin();
slot.stopSpin();


