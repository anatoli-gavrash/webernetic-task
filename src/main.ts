import './index.scss';
import {createForm} from './utils/dom.ts';

(() => {
  const modal = document.querySelector('.modal');
  const modalButton = document.querySelector('.content__left-button');

  if (modal) {
    modal.append(createForm());
    modal.addEventListener('click', (e) => {
      const element = e.target as HTMLButtonElement;
      
      if (element.classList.contains('modal')) {
        element.classList.remove('show');
      }
    });
  }

  modalButton?.addEventListener('click', () => {
    modal?.classList.add('show');
  });
})();
