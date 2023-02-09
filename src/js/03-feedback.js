import throttle from 'lodash.throttle';
// const throttle = require('lodash.throttle');
// from '../../node_modules/lodash.throttle/index.js';

const formData = {};

const FEEDBACK_FORM = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  message: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form [name] ="email" '),
};

console.log(refs.form);
console.log(refs.textarea);

refs.form.addEventListener('submit', onFormSubmit);
refs.message.addEventListener('input', throttle(onTextareaInput, 200));

refs.form.addEventListener('input', e => {
  formDate[e.target.name] = e.target.value;
  console.log(formDate);
});

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('email: ', JSON.parse(JSON.parse(saveFormData).email));
  console.log('message: ', JSON.parse(JSON.parse(saveFormData).message));

  evt.curentTarget.reset();
  localStorage.remove(FEEDBACK_FORM);
}

function onTextareaInput(evt) {
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function populateFormInput() {
  const saveFormData = localStorage.getItem(FEEDBACK_FORM);
  if (saveFormData) {
    refs.message.value = JSON.parse(saveFormData).message;
    refs.email.value = JSON.parse(saveFormData).email;
  }
}
