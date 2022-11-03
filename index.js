const btnOpen = document.querySelector('.nav-menu-btn');
const btnClose = document.querySelector('.dialog-close-btn');
const dialog = document.querySelector('#menu-dialog');
const overlay = document.querySelector('.overlay');

btnOpen.addEventListener('click', () => {
    dialog.classList.add('open');
    overlay.classList.add('show');
    document.body.classList.add('no-scroll');
});

btnClose.addEventListener('click', () => {
    dialog.classList.remove('open');
    overlay.classList.remove('show');
    document.body.classList.remove('no-scroll');
});