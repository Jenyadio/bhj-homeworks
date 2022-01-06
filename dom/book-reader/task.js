const fontSize = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

for (let elem of fontSize) {
    elem.addEventListener('click', (event) => {
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        elem.classList.add('font-size_active');
        if (elem.classList.contains('font-size_small')) {
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');
        } else if (elem.classList.contains('font-size_big')) {
            elem.classList.add('font-size_active');
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');
        } else {
            book.classList.remove('book_fs-big', 'book_fs-small');
        }
        event.preventDefault();
    })
};

const textColor = document.querySelector('.book__control_color');
const color = textColor.querySelectorAll('.color');

for (let elem of color) {
    elem.addEventListener('click', (event) => {
        document.querySelector('.color_active').classList.remove('color_active');
        elem.classList.add('color_active');
        if (elem.classList.contains('text_color_black')) {
            book.classList.remove('book_color-gray', 'book_color-whitesmoke');
            book.classList.add('book_color-black');
        } else if (elem.classList.contains('text_color_gray')) {
            book.classList.remove('book_color-black', 'book_color-whitesmoke'); 
            book.classList.add('book_color-gray');
        } else {
            book.classList.remove('book_color-gray', 'book_color-black');
            book.classList.add('book_color-whitesmoke');
        }
        event.preventDefault();
    })
};

const bg = document.querySelector('.book__control_background');
const bgColor = bg.querySelectorAll('.color');

for (let elem of bgColor) {
    elem.addEventListener('click', (event) => {
        document.querySelector('.color_active').classList.remove('color_active');
        elem.classList.add('color_active');
        if (elem.classList.contains('bg_color_black')) {
            book.classList.remove('book_bg-gray', 'book_bg-black');
            book.classList.add('book_bg-black');
        } else if (elem.classList.contains('bg_color_gray')) {
            book.classList.remove('book_bg-black', 'book_bg-white'); 
            book.classList.add('book_bg-gray');
        } else {
            book.classList.remove('book_bg-gray', 'book_bg-black');
            book.classList.add('book_bg-white');
        }
        event.preventDefault();
    })
};