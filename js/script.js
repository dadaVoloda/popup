'use strict';

const modal = document.querySelector('.modal-wrapper');
const close = document.querySelector('.modal__close');
  
function openModal() {
  modal.classList.add('show');
  localStorage.setItem('openModal', 'y');
}
function closeModal() {
  modal.classList.remove('show');
}

function modalTimer() {
  if (localStorage.getItem('openModal') !== 'y') {
    setTimeout(openModal, 5000);
  }
}

modalTimer();

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
})
close.addEventListener('click', () => {
  closeModal();
})