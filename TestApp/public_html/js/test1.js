console.log(213 * 32542);

var title='Test page', 
        text='Enter your CVV code here', 
        ageVerifying='How old are you?',
        genderVerification = 'If you are a male, please click Ok. Else - click Cancel',
        yourName = 'What is your name?';


//var result = prompt(title, text);

var years = prompt(ageVerifying, '');
//alert('You are ' + years + ' years old');
var name = prompt(yourName, 'Enter your name here');


var gender = confirm(genderVerification);
//alert(gender);

var sex = (gender === true)?'male':'female';

alert('My name is ' + name + '\n\nI am ' + years + ' years old' + '\n\nI am a ' + sex);