// Pairwise brute force of numbers from the array
var arr = [33, 45, 23, 12, 34, 1, 35, 21, 5, 3];
for (var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
        if(arr[i]!==arr[j]){
            console.log(arr[i] + ' and ' + arr[j]);
        }
    }
}




//My object for example is MICROWAVE
var colors = ['white', 'blue', 'black', 'gray'];
var prise = 1000;
var microwave = {
    producer : 'Bosh',
    type : 'electronic',
    capacity : '1000',
    size_parameters : {width : '',
        height : '',
        depth : '',
        volume : ''
    },
    additional_function : function(){
        this.a = confirm("If you want 'automatic defrosting' function click 'Ok'. Else click'Cancel'");
        this.b = confirm("If you want 'crispy crust' function click 'Ok'. Else click 'Cancel'");
        this.c = confirm("If you want 'steaming' function click 'Ok'. Else click 'Cancel'");
        this.d = confirm("If you want 'recip memory' function click 'Ok'. Else click 'Cancel'");
    },
    set_color : function(){
        this.color = prompt('Enter color what you want!', '');
        for (i = 0; i < colors.length; i++){
            if(this.color == colors[i]){
                console.log('Your selected microwave is ' + colors[i]);
            } 
        }
    },
    get_prise : function(){
        var arr = [this.a, this.b, this.c, this.d];
        if (this.color == 'black') {
            prise += 100;
        }
        for (i = 0; i < arr.length; i++) {
            if (arr[i]) {
                prise += 100;
            }
        }
        console.log(prise);
    }
};

microwave.set_color();
microwave.additional_function();
microwave.get_prise();
