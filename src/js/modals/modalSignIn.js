(() => {
  const refs = {
    openModalBtnSignIn: document.querySelector('.js-btn-login'),
    closeModalBtnSignIn: document.querySelector('.modal__close-btn'),
    modal: document.querySelector('.js-data-mod'),
  };

  refs.openModalBtnSignIn.addEventListener('click', toggleModalSignIn);
  refs.closeModalBtnSignIn.addEventListener('click', toggleModalSignIn);

  function toggleModalSignIn() {
    refs.modal.classList.toggle('visually-hidden');
  }
})();
