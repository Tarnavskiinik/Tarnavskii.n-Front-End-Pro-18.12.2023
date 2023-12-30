const age = Number(prompt('Enter your year of birth'));
const city = prompt('Enter your city');
const sport = prompt('Enter your favorite sport');

if(age){
    alert(2023 - age)
} else if( age === null){
    alert('Too bad you did not want to enter your age')
}

if(city === 'Киев'){
    alert('Ты живешь в Столице Украины')
}else if (city === 'Вашингтон'){
    alert('Ты живешь в Столице Америки')
}else if(city === 'Лондон'){
    alert('Ты живешь в Столице Англии')
}else if(city === null){
    alert('Too bad you did not want to enter your city')
}else{
    alert('Ты живешь в городе ' + citi)
}

if (sport === 'boks'){
    alert('Круто! Ты хочешь стать как Александр Усик?')
}else if(sport === 'basketball'){
    alert('Круто! Ты хочешь стать как Кобби Брайн?')
}else if(sport === 'soccer'){
    alert('Круто! Ты хочешь стать как Роналду?')
}else if(sport === null){
    alert('Too bad you did not want to enter your favorite sport')
}