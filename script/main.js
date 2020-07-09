const modalAdd = document.querySelector('.modal__add');
addAd = document.querySelector('.add__ad'),
  modalBtnSubmit = document.querySelector('.modal__btn-submit'),
  modalSubmit = document.querySelector('.modal__submit'),
  catalog = document.querySelector('.catalog'),
  modalItem = document.querySelector('.modal__item'),
  modalBtnWarning = document.querySelector('.modal__btn-warning'),
  elementsModalSubmit = [...modalSubmit.elements]
  .filter(elem => elem.tagName !== 'BUTTON');
// elementsModalSubmit в модальном окне оставляет формы

const closeModal = function (event) {
  const target = event.target;

  if (target.closest('.modal__close') || target === this) {
    this.classList.add('hide');
    if (this === modalAdd) {
      modalSubmit.reset();
    }
  }
};
//Закрытие модальных окон (общая функция)

modalSubmit.addEventListener('input', () => {
  const validForm = elementsModalSubmit.every(elem => elem.value);
  modalBtnSubmit.disabled = !validForm;
  modalBtnWarning.style.display = validForm ? 'none' : '';
});
// Валидация заполнения форм

const closeModalEsc = event => {
  if (event.key === 'Escape') {
    modalAdd.classList.add('hide');
    modalItem.classList.add('hide');
    modalSubmit.reset();
    document.removeEventListener('keydown', closeModalEsc);
  }
};
//Закрытие модальных окон при нажатии ESC

addAd.addEventListener('click', () => {
  modalAdd.classList.remove('hide');
  modalBtnSubmit.disabled = true;
  document.addEventListener('keydown', closeModalEsc);
});
modalAdd.addEventListener('click', closeModal);
//Открытие/закрытие модального окна объявления

catalog.addEventListener('click', event => {
  const target = event.target;
  if (target.closest('.card')) {
    modalItem.classList.remove('hide');
    document.addEventListener('keydown', closeModalEsc);
  }
});
modalItem.addEventListener('click', closeModal);
//Открытие/закрытие модального окна каталога


/*
modalAdd.addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('modal__close') || target === modalAdd) {
    modalAdd.classList.add('hide'); 
    modalSubmit.reset();
  }
});
// Закрытие модального окна кнопки подачи объявления нажатием на крестик или за границей окна
// можно target.classList.closest('.modal__close')..

modalItem.addEventListener('click', event => {
  const target = event.target;

  if (target.classList.contains('modal__close') || target === modalItem) {
    modalItem.classList.add('hide');
  }
});
// Закрытие модального окна каталога нажатием на крестик или за границей окна

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 27) {
    modalAdd.classList.add("hide");
    modalItem.classList.add("hide");
  }
});
// Закрытие модальных окон нажатием на "Esc" через код клавиши
*/