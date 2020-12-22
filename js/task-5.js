const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

function changeOutput(event) {
  output.textContent = event.target.value;
  if (output.textContent === '') {
    output.textContent = 'незнакомец';
  }
}
input.addEventListener('input', changeOutput);
