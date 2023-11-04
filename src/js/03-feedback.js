import _ from 'lodash';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', _.throttle(saveInfo, 500));
pullSavedInfo();

const formInfo = {};
function saveInfo() {
  formInfo.message = form.message.value;
  formInfo.email = form.email.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formInfo));
}

function pullSavedInfo() {
  try {
    const parsedJson = JSON.parse(localStorage.getItem('feedback-form-state'));
    form.elements.email.value = parsedJson.email;
    form.elements.message.value = parsedJson.message;
    return parsedJson;
  } catch (error) {
    console.log(`Pull error: ${error}`);
  }
}

form.addEventListener('submit', resetForm);

function resetForm(event) {
  event.preventDefault();
  console.log(pullSavedInfo());
  localStorage.clear();
  event.target.reset();
}
