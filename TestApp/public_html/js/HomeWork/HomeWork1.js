//Little survey using prompt and alert))
var ageVerifying='How old are you?',
    genderVerification = 'If you are a male, please click Ok. Else - click Cancel',
    yourName = 'What is your name?';

var years = prompt(ageVerifying, '');

var name = prompt(yourName, 'Enter your name here');

var gender = confirm(genderVerification);

var sex = (gender === true)?'male':'female';

alert('My name is ' + name + '\n\nI\'m ' + years + ' years old' + '\n\nI am a ' + sex);

