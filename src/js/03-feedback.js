import { throttle } from 'lodash';

const formData = {};

const FEEDBACK_FORM = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  message: document.querySelector('textarea[name="message"]'),
  email: document.querySelector('input[name="email"]'),
};

populateFormInput(); //відновлення даних після перезагрузки сторінки

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener(
  'input',
  throttle(e => {
    formData[e.target.name] = e.target.value;

    localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
  }, 500) // Оновлення сховища раз на 500 мілісекунд
);

function onFormSubmit(evt) {
  evt.preventDefault();

  if (refs.message.value === '' || refs.email.value === '') {
    return alert('Заповніть усі поля перед відправкою форми');
  }
  console.log(formData);

  evt.currentTarget.reset(); //очищаємо поля форми
  localStorage.removeItem(FEEDBACK_FORM); //забираємо FEEDBACK_FORM з localStorage
}

function populateFormInput() {
  const saveFormData = localStorage.getItem(FEEDBACK_FORM);

  if (saveFormData) {
    refs.message.value = JSON.parse(saveFormData).message || ''; //відновлюємо дані у формі localStorage
    refs.email.value = JSON.parse(saveFormData).email || '';
    formData.email = refs.email.value; //відновлюємо formData щоб співпадав з localStorage
    formData.message = refs.message.value;
  }
}
