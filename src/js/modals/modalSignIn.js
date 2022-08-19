import { refs } from '../config/refs';

refs.buttonLogin.addEventListener('click', toggleModal);
refs.closeModalBtnSignIn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modalSignIn.classList.toggle('visually-hidden');
  console.log('qwe');
}
