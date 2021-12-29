const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabActive = document.querySelector('.tab_active');
        const tabContentActive = document.querySelector('.tab__content_active');
        tabActive.classList.remove('tab_active');
        tabContentActive.classList.remove('tab__content_active');
        tab.classList.add('tab_active');
        let index = tabs.indexOf(tab);
        tabContents[index].classList.add('tab__content_active');
    })
})