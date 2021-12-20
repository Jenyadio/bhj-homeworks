const modalMain = document.getElementById('modal_main');
modalMain.classList.add('modal_active');

const modalClosure = document.getElementsByClassName('modal__close');
for (let i = 0; i < modalClosure.length; i++) {
    modalClosure[i].onclick = () => {
       modalClosure[i].closest('.modal').classList.remove('modal_active');
    }
}

const showSuccess = document.querySelector('a.show-success');
const modalSuccess = document.getElementById('modal_success');

showSuccess.onclick = () => {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}