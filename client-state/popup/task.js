const modal = document.querySelector('.modal');
const modalCLose = document.querySelector('.modal__close');

window.addEventListener('load', () => {
    if (!getCookie('close')) {
        modal.classList.add('modal_active');
    };

    modalCLose.addEventListener('click', (event) => {
        document.cookie = 'close=true';
        modal.classList.remove('modal_active');
    });
})

function getCookie(name) {
    console.log(document.cookie);
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
    return null;
}