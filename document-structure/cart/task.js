const product = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

product.forEach(elem => {
    const dec = elem.querySelector('.product__quantity-control_dec');
    const value = elem.querySelector('.product__quantity-value');
    const inc = elem.querySelector('.product__quantity-control_inc');
    const productAdd = elem.querySelector('.product__add');

    dec.onclick = function() {
        if (value.textContent > 1) {
            value.textContent--;
        };
    };

    inc.onclick = function() {
        value.textContent++;
    };

    productAdd.onclick = function() {
        if (cartProducts.querySelector(`.cart__product[data-id="${elem.dataset.id}"]`) === null) {
            cartProducts.insertAdjacentHTML("afterbegin", `
            <div class="cart__product" data-id="${elem.dataset.id}">
                <img class="cart__product-image" src="${elem.querySelector('.product__image').src}">
                <div class="cart__product-count">${value.textContent}</div>
            </div>`);
        } else {
            let cartCount = cartProducts.querySelector(`.cart__product[data-id="${elem.dataset.id}"]`).querySelector('.cart__product-count');
            cartCount.textContent = Number(cartCount.textContent) + Number(value.textContent) ;
        };
    };

});


/* const cartProducts = document.querySelector('.cart__products');

document.addEventListener('click', (event) => {
    const inc = event.target.classList.contains('product__quantity-control_inc');
    const dec = event.target.classList.contains('product__quantity-control_dec');
    const value = event.target.parentElement.querySelector('.product__quantity-value');

    if (inc) {
        value.textContent++;
    };

    if (dec) {
        if (value.textContent > 1) {
            value.textContent--;
        };
    };

    const productAdd = event.target.classList.contains('product__add');
    if (productAdd) {
        const parent = event.target.closest('.product');
        const checkCart = document.querySelector(`.cart__product[data-id="${parent.dataset.id}"]`);
        if (checkCart) {
            const checkValue = checkCart.querySelector('.cart__product-count');
            const sum = Number(value.textContent) + Number(checkValue.textContent);
            checkValue.textContent = sum;
        } else {
            cartProducts.insertAdjacentHTML("afterbegin", `
            <div class="cart__product" data-id="${parent.dataset.id}">
                <img class="cart__product-image" src="${parent.querySelector('.product__image').src}">
                <div class="cart__product-count">${value.textContent}</div>
            </div>`)
        };
    };
    event.preventDefault();
}); */