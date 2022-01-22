'use strict';

const buttons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-modal');
const modalOverlay = document.querySelector('.overlay');


const openModal = () => {
    modal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
}

const closeModal = () => {
    modal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
}

buttons.forEach((button) => button.addEventListener('click', openModal));
closeButton.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);