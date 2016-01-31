/*function great(name){
    //var name = prompt('What is your name?', '');
    console.log('Hello ' + name + '!');
}

function add(x, y) {
    console.log(x + y);
   //var result = x + y;
   return x + y;
}

function pow(num, stepen){
    var result = num * stepen;
    return result;
}

function mult(x, y) {
    var res = x * y * add(x, y);
    console.log(x * y * add(x, y));
    return res;
}
var test = pow(2,5);
var test1 = add(2,5);


if( add(33, 44) > mult(1, 5) ){
    alert('Absurd, code error!');
}

/*var param1 = add(33,44);
var param2 = mult(2,5);

if( param1 > param2 ){
    alert('Absurd, code error!');
}*/

/*add(33,44) > mult(2,5) ? alert('Cool!'):alert('Not cool');*/


//var vova = 'DavayDosvidos';
/*test();
getInfo();

function test(){
 var vova = 'Privet';
// console.log(vova);
 getInfo();
}
function getInfo(){
    console.log(vova);
}
*/






var score = 55;
//Method 1
/*if (score < 20){
    alert('Loozer');
} else 
    if (score > 80){
        alert('Monster');
    } else {
        alert('Normal');
    } {
    alert('!!!!!');
}*/


//Method 2
if (score < 20){
    alert('Loozer');
}
if (score >= 20 && score <= 80){
    alert('Normal');
}
if (score > 80){
    alert('Monster');
}

