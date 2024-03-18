const inputValue = Array.from(document.querySelectorAll('input , textarea, input[name="ch"]'))
const but = document.querySelector('.btn')
const formRegistr = document.querySelector('.registration')
const responses = document.querySelector('.responses')
let selectedLanguages = [];




but.addEventListener('click', (e) => {
    e.preventDefault();
    let responsesValue = document.createElement('div');
    responsesValue.className = 'responses-value';

    inputValue.forEach(input => {
        if (input.type === 'checkbox' && input.checked) {
            selectedLanguages.push(input.value);
        } else if (input.type === 'radio' && input.checked) {
            responsesValue.innerHTML += input.value + '<br>';
        } else if (input.type !== 'checkbox') {
            responsesValue.innerHTML += input.value + '<br>';
        }
    });
    responsesValue.innerHTML +=  selectedLanguages.join(', ') + '<br>';
        responses.appendChild(responsesValue);
});