const menuLinks = Array.from(document.getElementsByClassName('menu__link'));

menuLinks.forEach(element => {element.onclick = () => {
    const menuActive = document.querySelector('.menu_active');
    if (element.closest('.menu__item').querySelector('.menu_sub')) {
        element.closest('.menu__item').querySelector('.menu_sub').classList.toggle('menu_active');
        if (menuActive) {
            menuActive.classList.remove('menu_active')
        }
        return false;
    }
}});
