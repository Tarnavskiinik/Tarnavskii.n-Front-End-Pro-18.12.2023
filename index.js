const category = Array.from(document.querySelectorAll('.category'));
const product = document.querySelector('.product');
const information = document.querySelector('.information');

category.forEach(category => {
    category.addEventListener('click', () => {
        const categoryValue = category.dataset.value;
        console.log(categoryValue);
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
        product.appendChild(newDiv);
    });
});

product.addEventListener('click', (e) => {
    const target = e.target;
    console.log(e.target);
    let content = '';

    if (target.tagName === 'LI') {
        const productText = target.textContent;
        switch (productText) {
            case 'Чехлы':
                content = '<li>Панель Apple MagSafe Clear Case для Apple iPhone 15 Pro Max Clear (MT233ZM/A) </li>';
                break;
            case 'Samsung':
                content = '<li>Смартфон Samsung Galaxy S24 Ultra 12GB/1TB Titanium Black</li>';
                break;
            case 'Casio':
                content = '<li>Мужские часы CASIO G-Shock GBA-900UU-3AER</li>';
                break;
            case 'Пылесос':
                content = '<li>Пылесос без мешка SAMSUNG VCC45W0S36/UK</li>';
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

    const buyButton = document.createElement('button');
    buyButton.className = 'buy-button';
    buyButton.textContent = 'Купить';
    information.appendChild(buyButton); 
});

information.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('buy-button')) {
        alert('Товар куплен!');
        information.innerHTML = '';
        product.innerHTML = '';
    }
});