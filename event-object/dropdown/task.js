const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});

for (let item of dropdownItem) {
    item.addEventListener('click', (event) => {
        dropdownValue.textContent = item.querySelector('.dropdown__link').textContent;
        dropdownList.classList.toggle('dropdown__list_active');
        event.preventDefault();
    })
}

