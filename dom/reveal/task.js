const revealBlocks = document.querySelectorAll('.reveal');
const height = window.innerHeight;

window.onscroll = function () {
    for (let block of revealBlocks) {
        const blockVisible = block.getBoundingClientRect();
        const blockTop = height > blockVisible.top && blockVisible.top > 0;
        const blockBottom = height > blockVisible.bottom && blockVisible.bottom > 0;
        
        if (blockTop && blockBottom) {
            block.classList.add('reveal_active');
        }; 
    }; 
};