const age = Number(prompt('Enter your year of birth'));
const city = prompt('Enter your city');
const sport = prompt('Enter your favorite sport');

let message = '';

if (age) {
    message += `Тебе: ${2023 - age}\n`;
} else if (age === null) {
    message += 'Too bad you did not want to enter your age\n';
}

if (city === 'Киев') {
    message += 'Ты живешь в столице Украины\n';
} else if (city === 'Вашингтон') {
    message += 'Ты живешь в столице Америки\n';
} else if (city === 'Лондон') {
    message += 'Ты живешь в столице Англии\n';
} else if (city === null) {
    message += 'Too bad you did not want to enter your city\n';
} else {
    message += `Ты живешь в городе  ${city} \n`;
}

if (sport === 'boks') {
    message += 'Круто! Ты хочешь стать как Александр Усик?\n';
} else if (sport === 'basketball') {
    message += 'Круто! Ты хочешь стать как Кобби Брайант?\n';
} else if (sport === 'soccer') {
    message += 'Круто! Ты хочешь стать как Роналду?\n';
} else if (sport === null) {
    message += 'Too bad you did not want to enter your favorite sport\n';
} else {
    message += `Твой любимый вид спорта -  ${sport} \n`;
}

alert(message);
