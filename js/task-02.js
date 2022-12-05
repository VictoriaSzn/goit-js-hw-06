const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const UlEl = document.querySelector('#ingredients');

const newLiEl = ingredients.map(element => {
  
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = element;

  return liEl;
});

UlEl.append(...newLiEl);
console.log(UlEl);