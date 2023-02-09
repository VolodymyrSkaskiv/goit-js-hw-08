// import throttle from 'lodash.throttle';
// const throttle = require('lodash.throttle');
// from '../../node_modules/lodash.throttle/index.js';

const formData = {};

const FEEDBACK_FORM = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  message: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

populateFormInput();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onTextareaInput);
// throttle(onTextareaInput, 200);

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  console.log(formData);
});

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.remove(FEEDBACK_FORM);
}

function onTextareaInput(evt) {
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(formData));
}

function populateFormInput() {
  const saveFormData = localStorage.getItem(FEEDBACK_FORM);
  console.log(saveFormData);
  if (saveFormData) {
    refs.message.value = JSON.parse(saveFormData).message;
    refs.email.value = JSON.parse(saveFormData).email;
  }
}
