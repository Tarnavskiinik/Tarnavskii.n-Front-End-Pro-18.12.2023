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
            let radioResponse = document.createElement('div');
            radioResponse.textContent = input.value;
            responsesValue.appendChild(radioResponse);
        }else if (input.type !== 'checkbox' && input.type !=='radio') {
            let textResponse = document.createElement('div');
            textResponse.textContent = input.value;
            responsesValue.appendChild(textResponse);
        }
    });
    let languagesResponse = document.createElement('div');
    languagesResponse.textContent = selectedLanguages.join(', ');
    responsesValue.appendChild(languagesResponse);
    responses.appendChild(responsesValue);
    formRegistr.style.display = 'none';
});
