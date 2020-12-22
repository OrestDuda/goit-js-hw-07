const counter = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
const minus = counter.firstElementChild;
const plus = counter.lastElementChild;

function decrement() {
  counterValue.textContent = +counterValue.textContent - 1;
}
function increment() {
  counterValue.textContent = +counterValue.textContent + 1;
}

minus.addEventListener('click', decrement);
plus.addEventListener('click', increment);
