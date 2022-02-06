const editor = document.getElementById('editor');
const button = document.getElementById('clear');

editor.addEventListener('input', () => {
    localStorage.setItem('text', editor.value);
})
editor.value = localStorage.getItem('text');

button.addEventListener('click', () => {
    localStorage.removeItem('text');
    editor.value = '';
});
