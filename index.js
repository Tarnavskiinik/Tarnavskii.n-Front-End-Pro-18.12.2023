const userName = prompt('What is your name?');
const userLastName = prompt('What is your last name?');
const userAge = prompt('How old are you');
console.log(`${userName} ${userLastName} ${userAge}`);


const randomNumber = 56321;
const reEducation = String(randomNumber).split('')
const originalOrder = reEducation.join(' ')
console.log(originalOrder);