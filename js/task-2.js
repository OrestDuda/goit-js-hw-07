const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');
let arrWithList = [];
ingredients.map(value => {
  const elementLi = document.createElement('li');
  elementLi.textContent = value;
  arrWithList.push(elementLi);
});

list.append(...arrWithList);
