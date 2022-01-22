'use strict';

const buttons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-modal');
const modalOverlay = document.querySelector('.overlay');
let isOpen = false;


const openModal = () => {
    isOpen = true;
    modal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
}

const closeModal = () => {
    isOpen = false;
    modal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
}

buttons.forEach((button) => button.addEventListener('click', openModal));
closeButton.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27 && isOpen) {
        closeModal();
    }
});

