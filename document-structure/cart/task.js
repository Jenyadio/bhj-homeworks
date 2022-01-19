const cartProducts = document.querySelector('.cart__products');

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
})