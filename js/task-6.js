const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

function validator(event) {
  if (+event.target.value.length !== +inputLength) {
    input.classList.remove('valid');
    return input.classList.add('invalid');
  }
  input.classList.remove('invalid');
  input.classList.add('valid');
}

input.addEventListener('blur', validator);
