let control = document.querySelector('input#font-size-control');
let text = document.querySelector('#text');

control.addEventListener('input', () => {
  text.style.fontSize = control.value + 'px';
});
