const loader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onload = function() {
    if (xhr.status != 200) {
        alert('Ошибка: ' + xhr.status);
        return;
    } let data = JSON.parse(this.response);
    console.log(data);
    for (let key in data.response.Valute) {
        const { CharCode, Value } = data.response.Valute[key];
        items.insertAdjacentHTML('afterbegin', `<div class="item">
        <div class="item__code">
                ${CharCode}
            </div>
            <div class="item__value">
                ${Value}
            </div>
            <div class="item__currency">
                руб.
            </div>
      </div>
        `)
    }
    loader.classList.remove('loader_active');
}