const category = Array.from(document.querySelectorAll('.category'));
const product = document.querySelector('.product');
const information = document.querySelector('.information');
const form = document.querySelector('.form');
const orderForm = document.querySelector('.order-form');
const buttonForm = document.querySelector('.button-ord');
const inpValue = document.querySelectorAll('input , textarea')
let valueProduct = ''
let isValid = true;

category.forEach(category => {
    category.addEventListener('click', () => {
        const categoryValue = category.dataset.value;
        let content;

        switch (categoryValue) {
            case 'accessories':
                content = '<li>Чехлы</li>';
                break;
            case 'smartphones':
                content = '<li>Samsung</li>';
                break;
            case 'watches':
                content = '<li>Casio</li>';
                break;
            case 'appliances':
                content = '<li>Пылесос</li>';
                break;
            default:
                content = '<li>Другие товары</li>';
        }
        const newDiv = document.createElement('li');
        newDiv.innerHTML = content;
        product.innerHTML = '';
        information.innerHTML= ''
        form.innerHTML = ''
        product.appendChild(newDiv);
    });
});

product.addEventListener('click', (e) => {
    const target = e.target;
    let content = '';

    if (target.tagName === 'LI') {
        const productText = target.textContent;
        switch (productText) {
            case 'Чехлы':
                content = 'Панель Apple MagSafe Clear Case для Apple iPhone 15 Pro Max Clear (MT233ZM/A) ';
                break;
            case 'Samsung':
                content = 'Смартфон Samsung Galaxy S24 Ultra 12GB/1TB Titanium Black';
                break;
            case 'Casio':
                content = 'Мужские часы CASIO G-Shock GBA-900UU-3AER';
                break;
            case 'Пылесос':
                content = 'Пылесос без мешка SAMSUNG VCC45W0S36/UK';
                break;
            default:
                content = 'Другие товары';
                break;
        }
    }

    let newDiv = document.createElement('li');
    newDiv.innerHTML = content;
    information.innerHTML = '';
    information.appendChild(newDiv);
    valueProduct = content

    const buyButton = document.createElement('button');
    buyButton.className = 'buy-button';
    buyButton.textContent = 'Купить';
    information.appendChild(buyButton); 
});

information.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('buy-button')) {
        let formDiv = document.createElement('div')

        form.appendChild(formDiv)
        orderForm.style.display = 'block'
        information.innerHTML = '';
        product.innerHTML = '';  
        buttonForm.addEventListener('click', (e) =>{
            e.preventDefault();
            const formValue = new FormData(orderForm)
            const blockForm = document.createElement('div')
            blockForm.className = 'requisites'
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = valueProduct;
            blockForm.appendChild(descriptionElement);
            formValue.forEach((value , key) => {
                if(!value.trim()){
                    alert(`Введите значение для поля '${key}'`)
                    return
                }else{
                    const keyValueElement = document.createElement('p');
                    keyValueElement.textContent = ` ${key}: ${value}`;
                    blockForm.appendChild(keyValueElement);
                    orderForm.style.display = 'none'
                }
            })
            if (isValid) {
                form.appendChild(blockForm);
                orderForm.style.display = 'none';
            }
        })
    }
});