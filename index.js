const categoryButtons = document.querySelectorAll('.category');
const productDiv = document.querySelector('.product');
const informationDiv = document.querySelector('.information');
const formDiv = document.querySelector('.form');
const orderForm = document.querySelector('.order-form');
const buttonForm = document.querySelector('.button-ord');
const myOrdersBtn = document.querySelector('.my-orders-btn');
const ordersListDiv = document.querySelector('.orders-list');

let valueProduct = '';

categoryButtons.forEach(category => {
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

        productDiv.innerHTML = '';
        informationDiv.innerHTML = '';
        formDiv.innerHTML = '';
        productDiv.innerHTML = content;
    });
});

productDiv.addEventListener('click', (e) => {
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
    informationDiv.innerHTML = '';
    informationDiv.appendChild(newDiv);
    valueProduct = content;

    const buyButton = document.createElement('button');
    buyButton.className = 'buy-button';
    buyButton.textContent = 'Купить';
    informationDiv.appendChild(buyButton);

    buyButton.addEventListener('click', () => {
        orderForm.style.display = 'block';
        informationDiv.innerHTML = '';
        productDiv.innerHTML = '';
    });
});

buttonForm.addEventListener('click', (e) => {
    e.preventDefault();
    const formValue = new FormData(orderForm);
    const blockForm = document.createElement('div');
    blockForm.className = 'requisites';
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = valueProduct;
    blockForm.appendChild(descriptionElement);

    let invalidFields = [];

    formValue.forEach((value, key) => {
        if (!value.trim()) {
            invalidFields.push(key);
        } else {
            const keyValueElement = document.createElement('p');
            keyValueElement.textContent = `${key}: ${value}`;
            blockForm.appendChild(keyValueElement);
        }
    });

    if (invalidFields.length === 0) {
        orderForm.style.display = 'none';
        formDiv.appendChild(blockForm);

        const order = {
            product: valueProduct,
            formData: Array.from(formValue.entries())
        };

        let orders = JSON.parse(localStorage.getItem("orders")) || [];
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
    } else {
        let errorMessage = 'Пожалуйста, заполните все поля формы корректно: ';
        invalidFields.forEach(field => {
            errorMessage += `${field} , `;
        });
        alert(errorMessage);
    }
});

myOrdersBtn.addEventListener('click', () => {
    ordersListDiv.innerHTML = ''; 

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length === 0) {
        ordersListDiv.innerHTML = '<p>У вас пока нет заказов.</p>';
    } else {
        orders.forEach((order, index) => {
            const blockForm = document.createElement('div');
            blockForm.className = 'requisites';
            blockForm.style.display = 'block';
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = order.product;
            blockForm.appendChild(descriptionElement);
            order.formData.forEach(([key, value]) => {
                const keyValueElement = document.createElement('p');
                keyValueElement.textContent = `${key}: ${value}`;
                blockForm.appendChild(keyValueElement);
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.addEventListener('click', () => deleteOrder(index));
            blockForm.appendChild(deleteButton);

            ordersListDiv.appendChild(blockForm);
        });
    }

    ordersListDiv.style.display = 'flex';
    ordersListDiv.style.flexDirection = 'column';
});

function deleteOrder(index) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.splice(index, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    displayOrders();
}

function displayOrders() {
    ordersListDiv.innerHTML = '';

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    if (orders.length === 0) {
        ordersListDiv.innerHTML = '<p>У вас поки немає замовлень.</p>';
    } else {
        orders.forEach((order, index) => { 
            const blockForm = document.createElement('div');
            blockForm.className = 'requisites';
            blockForm.style.display = 'block';
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = order.product;
            blockForm.appendChild(descriptionElement);
            order.formData.forEach(([key, value]) => {
                const keyValueElement = document.createElement('p');
                keyValueElement.textContent = `${key}: ${value}`;
                blockForm.appendChild(keyValueElement);
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.addEventListener('click', () => deleteOrder(index));
            blockForm.appendChild(deleteButton);

            ordersListDiv.appendChild(blockForm);
        });
    }

    ordersListDiv.style.display = 'flex'; 
    ordersListDiv.style.flexDirection = 'column'; 
}

myOrdersBtn.addEventListener('click', () => {
    displayOrders();
});