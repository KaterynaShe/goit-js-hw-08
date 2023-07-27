import throttle from 'lodash.throttle';

 const LOCAL_KEY = 'feedback-form-state';
 let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

 const form = document.querySelector('.feedback-form');

  form.addEventListener('input', throttle(storageFormData, 500));
  form.addEventListener('submit', onFormSubmit);

 reloadPage();

 function storageFormData(e) {
   formData[e.target.name] = e.target.value.trim();
   localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
 }

 function onFormSubmit(e) {
   e.preventDefault();
   console.log(formData);
   e.currentTarget.reset();
  localStorage.removeItem(LOCAL_KEY);
   formData = {};
 }

 function reloadPage() {
   if (formData) {
     let { email, message } = form.elements;
    email.value = formData.email || '';
    message.value = formData.message || '';
   }
 }

//const formEl = document.querySelector('.feedback-form');
//const emailInputEl = document.querySelector('input');
//const messageInputEl = document.querySelector('textarea');


//function saveFormState() {
//  const formState = {
//    email: emailInputEl.value,
//    message: messageInputEl.value,
//  };

//  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
//};

//formEl.addEventListener('input', throttle(saveFormState, 500));

//window.addEventListener('DOMContentLoaded', () => {
// const savedFormState = localStorage.getItem('feedback-form-state');

//  if (savedFormState) {
//    const formState = JSON.parse(savedFormState);

//    emailInputEl.value = formState.email;
//    messageInputEl.value = formState.message;
//  }
//});
//formEl.addEventListener('submit', (event) => {
//  event.preventDefault();

//  const formState = {
//    email: emailInputEl.value,
//    message: messageInputEl.value,
//  };

//  console.log(formState);

//  localStorage.removeItem('feedback-form-state');
//  emailInputEl.value = '';
//  messageInputEl.value = '';
//});