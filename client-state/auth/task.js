const form = document.getElementById('signin__form');
const signIn = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const btn = document.getElementById('signin__btn');
const userId = document.getElementById('user_id');

if (localStorage.userId) {
    userId.textContent = localStorage.userId;
    welcome.classList.add('welcome_active');
} else {
    signIn.classList.add('signin_active');
};

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open ('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);
    xhr.onload = () => {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.response);
            if (response.success) {
                localStorage.userId = response.user_id;
                signIn.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.textContent = localStorage.userId;
            } else {
                alert('Неверный логин/пароль');
            };
        };
    };
});

